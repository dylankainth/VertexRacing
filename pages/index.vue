<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-9" data-aos="fade-left">
          <img
            src="~/assets/vertexbanner.PNG"
            class="d-block mx-lg-auto img-fluid"
            alt="Vertex Car"
            width="auto"
            height="1000px"
            loading="lazy"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-right">
          <h1 class="display-3 fw-bold lh-1 mb-3">Vertex Racing</h1>
          <p class="lead">
            We are Vertex, <br />
            We are speed.
          </p>
        </div>
      </div>
    </div>

    <div v-if="!Mobile">
      <div class="container2" id="container2">
        <img class="mover" id="car" src="~/assets/vertex2d.PNG" />
      </div>
    </div>
    <div v-else>
      <img class="mover" src="~/assets/vertex2d.PNG" />
    </div>

    <div class="px-4 py-5 my-5 text-center" data-aos="zoom-in-up">
      <h1 class="display-5 fw-bold">
        An F1 in Schools Professional Class Team
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Vertex Racing is a podium-winning F1 in Schools team based in London,
          UK. Our five Year 11 members have contributed their spare time to
          developing a CAM machined foam car.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Meet the team
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            View the car
          </button>
        </div>
      </div>
    </div>

    <div
      class="container px-4 py-5 marketing"
      id="featured-3"
      data-aos="zoom-in-up"
    >
      <h2 class="pb-2 border-bottom">Our Values</h2>
      <div class="row pt-4">
        <div class="col-lg-4">
          <span class="material-icons"> quiz </span>

          <h2>Curiosity</h2>
          <p>
            This is about momentum. All our intrigue and questions overlap as
            one. How can we push the speed limit?
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <span class="material-icons"> groups </span>

          <h2>Camaraderie</h2>
          <p>
            This is about fun. We all love F1. We love coffee ☕. We love the
            team. And most importantly, we love the Car.
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <span class="material-icons"> construction </span>

          <h2>Craftsmanship</h2>
          <p>
            This is about perfection. We strive to make every aspect of our
            design contemplated and unique.
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
    </div>

    <div class="px-4 pt-5 my-5 text-center" data-aos="zoom-in-up">
      <h1 class="display-4 fw-bold">Our Success</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          We have achieved 3rd Place finish out of 10 competitors in the London
          North Development Class Competition, and are preparing to participate
          in the UK National Finals this coming October.
        </p>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh">
        <div class="container px-5">
          <img
            src="~/assets/vertex-racing-podium.webp"
            class="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div
      class="container px-4 py-5 marketing"
      id="featured-3"
      data-aos="zoom-in-up"
    >
      <h2 class="pb-2 border-bottom">Our Sponsors</h2>
      <div class="row pt-4">
        <div class="col-lg-6">
          <a href="https://www.3dprint-uk.co.uk/">
            <img src="~/assets/3dprintuk-logo-1.webp" />
          </a>
          <h3 class="pt-3">Platinum Sponsor</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    var container = document.getElementById('container')
    var windowHeight = window.innerHeight
    var windowWidth = window.innerWidth
    var scrollArea = windowHeight
    var car = document.getElementById('car')

    car.style.left =
      windowWidth - 0.025755879059350503 * window.innerWidth * 0.9 + 'px'

    // update position of square 1 and square 2 when scroll event fires.
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || window.scrollTop
      var scrollPercent = scrollTop / scrollArea || 0.0011198208286674132

      console.log(scrollPercent)

      //car.style.left = scrollPercent * window.innerWidth + 'px'

      car.style.left =
        windowWidth - scrollPercent * window.innerWidth * 0.9 + 'px'
      //console.log(car.style.left)
    })

    this.Mobile = this.isMobile()
  },
  data() {
    return {
      Mobile: null,
    }
  },
}
</script>

<style>
html {
  overflow-x: hidden;
}

.container2 {
  width: 100%;
  height: 300px;
}

.mover {
  position: absolute;
}

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.marketing .col-lg-6 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
.marketing .col-lg-6 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

.material-icons {
  font-size: 70px !important;
  color: #f88701;
}

.btn-primary {
  background-color: #f88701;
  border-color: #f88701;
}

.btn-primary:hover {
  background-color: #c56c00;
  border-color: #c56c00;
}

.btn-primary:link {
  background-color: #c56c00;
  border-color: #c56c00;
}
</style>
