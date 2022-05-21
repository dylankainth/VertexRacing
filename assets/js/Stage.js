/* eslint-disable unicorn/number-literal-case */
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PCFSoftShadowMap,
  AmbientLight,
  sRGBEncoding,
  ACESFilmicToneMapping,
  BoxGeometry,
  IcosahedronGeometry,
  SphereGeometry,
  MeshPhysicalMaterial,
  Mesh,
  Color,
  SpotLight,
  Vector3,
  Group,
  Euler,
} from 'three'
import gsap from 'gsap'
import { bindAll } from 'lodash-es'
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EventBus } from '~/assets/js/utils/event.js'

export default class Stage {
  constructor(opts = {}) {
    this.container = opts.container || document.body

    this.settings = {
      frontLight: {
        color: new Color(0xbe7c7c),
        intensity: 13.6,
        distance: 26.9,
        penumbra: 0,
        x: 10,
        y: 14,
        z: 14,
      },
      backLight: {
        color: new Color(0xc9f0f0),
        intensity: 13,
        distance: 23,
        penumbra: 0,
        x: -19,
        y: -5.3,
        z: 3,
      },
    }

    this.addListeners()
    this.init()
    this.onResize()
  }

  addListeners() {
    bindAll(this, ['onResize', 'render'])
    EventBus.$on('ON_RESIZE', this.onResize)
    EventBus.$on('ON_TICK', this.render)
  }

  removeListeners() {
    EventBus.$off('ON_RESIZE', this.onResize)
    EventBus.$off('ON_TICK', this.render)
  }

  init() {
    const pixelRatio = window.devicePixelRatio
    const AA = pixelRatio <= 1
    /* Init renderer and canvas */
    this.renderer = new WebGLRenderer({
      antialias: AA,
      alpha: true,
    })
    this.renderer.setPixelRatio(pixelRatio)

    this.renderer.toneMappingExposure = 0.6
    this.renderer.outputEncoding = sRGBEncoding
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.powerPreference = 'high-performance'

    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap

    this.container.style.overflow = 'hidden'
    this.container.style.margin = 0
    this.container.appendChild(this.renderer.domElement)

    /* Main scene and camera */
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(
      32,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    this.camera.position.y = 5
    this.camera.position.z = 10

    this.camera.lookAt(new Vector3(0, 0, 0))

    //this.controls = new OrbitControls(this.camera, this.container);
    //this.controls.update();

    const ambientLight = new AmbientLight(0xdbdbdb)
    this.scene.add(ambientLight)

    this.createLights()
    this.createScene()
  }

  createLights() {
    this.frontLight = new SpotLight(
      this.settings.frontLight.color,
      this.settings.frontLight.intensity,
      this.settings.frontLight.distance
    )

    this.frontLight.castShadow = true
    this.frontLight.shadow.mapSize.width = 1024 // default
    this.frontLight.shadow.mapSize.height = 1024 // default
    this.frontLight.shadow.camera.near = 0.5 // default
    this.frontLight.shadow.camera.far = 500
    this.frontLight.shadow.normalBias = 0.2

    this.scene.add(this.frontLight)

    this.backLight = new SpotLight(
      this.settings.frontLight.color,
      this.settings.frontLight.intensity,
      this.settings.frontLight.distance
    )
    this.backLight.castShadow = true
    this.backLight.shadow.mapSize.width = 1024 // default
    this.backLight.shadow.mapSize.height = 1024 // default
    this.backLight.shadow.camera.near = 0.5 // default
    this.backLight.shadow.camera.far = 500
    this.backLight.shadow.normalBias = 0.2
    this.backLight.penumbra = this.settings.backLight.penumbra

    this.scene.add(this.backLight)

    this.frontLight.position.set(
      this.settings.frontLight.x,
      this.settings.frontLight.y,
      this.settings.frontLight.z
    )
    this.backLight.position.set(
      this.settings.backLight.x,
      this.settings.backLight.y,
      this.settings.backLight.z
    )
  }

  createScene() {
    this.meshesContainer = new Group()
    this.scene.add(this.meshesContainer)

    const material1 = new MeshPhysicalMaterial({
      color: 0xed8936,
    })
    const cube = new Mesh(new BoxGeometry(1, 1), material1)
    cube.position.x = -2
    this.meshesContainer.add(cube)

    const material2 = new MeshPhysicalMaterial({
      color: 0x2b6cb0,
    })
    const ico = new Mesh(new IcosahedronGeometry(0.8), material2)
    this.meshesContainer.add(ico)

    const material3 = new MeshPhysicalMaterial({
      color: 0x97266d,
    })
    const sphere = new Mesh(new SphereGeometry(0.7, 16, 16), material3)
    sphere.position.x = 2
    this.meshesContainer.add(sphere)
  }

  lookAt({ index, zoom = 1 }) {
    // reset rotation for the prev currentTarget
    this.currentTarget && this.resetRotation(this.currentTarget)

    this.currentTarget = this.meshesContainer.children[index]

    const startRotation = new Euler().copy(this.camera.rotation)
    this.camera.lookAt(this.currentTarget.position)
    const endRotation = new Euler().copy(this.camera.rotation)

    // revert to original rotation
    this.camera.rotation.copy(startRotation)

    gsap.to(this.camera.rotation, 1.2, {
      x: endRotation.x,
      y: endRotation.y,
      z: endRotation.z,
      ease: 'elastic.out(1, 0.75)',
    })

    gsap.to(this.camera, 1.2, {
      zoom,
      onUpdate: () => {
        this.camera.updateProjectionMatrix()
      },
      ease: 'elastic.out(1, 0.75)',
    })
  }

  resetRotation(target) {
    gsap.to(target.rotation, 1, {
      x: 0,
      y: 0,
      ease: 'back.out',
    })
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  render({ mouse }) {
    if (this.currentTarget) {
      this.currentTarget.rotation.x += 0.01
      this.currentTarget.rotation.y += 0.01
    }

    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }
}
