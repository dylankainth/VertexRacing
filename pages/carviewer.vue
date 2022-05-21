<template></template>

<script type="module">
import * as THREE from 'three'

import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'

export default {
  name: 'Three',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      //const cube = new THREE.Mesh(geometry, material)
      //scene.add(cube)

      const loader = new OBJLoader()
      loader.load(
        '/CFDV3.obj',
        function (mesh) {
          // add to meshesContainer
          mesh.traverse(function (child) {
            if (child instanceof Mesh) {
              child.material = material1
              child.castShadow = true
              child.receiveShadow = true
            }
          })
          mesh.position.x = 0
          mesh.position.y = 0
          mesh.position.z = 0
          mesh.rotation.y = -0.5 * Math.PI

          mesh.rotation.z = -0.5 * Math.PI
          mesh.scale.set(30, 30, 30)
          mesh.castShadow = true
          mesh.receiveShadow = true
          this.meshesContainer.add(mesh)
        }.bind(this)
      )

      camera.position.z = 5

      function animate() {
        requestAnimationFrame(animate)

        //cube.rotation.x += 0.01
        //cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    },
  },
}
</script>
