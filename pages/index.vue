<template>
  <div id="app">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-9 autocol" data-aos="fade-left">
          <img src="~/assets/Isometric.png" class="d-block mx-auto img-fluid" alt="Vertex Car" width="auto"
            height="1000px" loading="lazy" />
        </div>
        <div class="col-lg-3" data-aos="fade-right">
          <h1 class="display-3 fw-bold lh-1 mb-3 text-center text-lg-start">
            Vertex Racing
          </h1>
          <p class="lead text-center text-lg-start">
            We are Vertex, <br />
            We are speed.
          </p>
        </div>
      </div>
    </div>

    <div class="movercontainer" id="movercontainer">
      <img class="mover" id="car" src="~/assets/Side-Car.png" />
    </div>

    <br>
    <br>

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
          <nuxt-link type="button" class="btn btn-primary btn-lg px-4 gap-3" to="about">
            Meet the team
          </nuxt-link>
          <nuxt-link type="button" class="btn btn-outline-secondary btn-lg px-4" to="gallery">
            View Gallery
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3" data-aos="zoom-in-up">
      <h2 class="pb-2 border-bottom">Our Values</h2>
      <div class="row pt-4">
        <div class="col-lg-4">
          <span class="material-icons"> quiz </span>

          <h2>Curiosity</h2>
          <p>
            This is about momentum. All our intrigue and questions overlap as
            one. How can we push the speed limit?
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <span class="material-icons"> groups </span>

          <h2>Camaraderie</h2>
          <p>
            This is about fun. We all love F1. We love coffee ☕. We love the
            team. And most importantly, we love the Car.
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <span class="material-icons"> construction </span>

          <h2>Craftsmanship</h2>
          <p>
            This is about perfection. We strive to make every aspect of our
            design contemplated and unique.
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
    </div>

    <div class="px-4 pt-5 my-5 text-center" data-aos="zoom-in-up">
      <h1 class="display-4 fw-bold">Our Success</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          In the 2021 season, we achieved 3rd Place finish out of 10 competitors
          in the London North Development Class Competition, and competed in the
          national finals in October.
        </p>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh">
        <div class="container px-5">
          <img src="~/assets/vertex-racing-podium.webp" class="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image" width="700" height="500" loading="lazy" />
        </div>
      </div>
      <div class="col-lg-6 mx-auto my-3">
        <p class="lead mb-4">
          In the 2022 season, we achieved 3rd Place in the London North
          Development Class Competition, and are now preparing to compete in the
          UK finals in February 2023
        </p>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3" data-aos="zoom-in-up">
      <h2 class="pb-2 border-bottom">Our Sponsors</h2>
      <div class="row pt-4">
        <div class="col-lg-6">
          <a href="https://www.3dprint-uk.co.uk/">
            <img src="~/assets/3dprintuk-logo-1.webp" class="w-100 sponsorlogo" />
          </a>
          <h3 class="pt-3">Platinum Sponsor</h3>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3" data-aos="zoom-in-up">
      <h2 class="pb-2 border-bottom">Our Sponsors</h2>
      <div class="row pt-4">


        <div class="col-lg-6">
          <a>
            <img src="~/assets/fmt-aero.png" class="w-100 sponsorlogo" />
          </a>
          <h3 class="pt-3">Gold Sponsor</h3>
        </div>

        <div class="col-lg-6">
          <a>
            <img src="~/assets/pacific.png" class="w-100 sponsorlogo" />
          </a>
          <h3 class="pt-3">Gold Sponsor</h3>
        </div>

        <div class="col-lg-6">
          <a>
            <img src="~/assets/PPM-logo.png" class="w-100 sponsorlogo" />
          </a>
          <h3 class="pt-3">Gold Sponsor</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: 'stylesheet',
        },
      ],
    }
  },
  mounted() {
    var container = document.getElementById('movercontainer')
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

      //car.style.left = scrollPercent * window.innerWidth + 'px'

      car.style.left =
        windowWidth - scrollPercent * window.innerWidth * 0.9 + 'px'
      //console.log(car.style.left)
    })
  },
}
</script>

<style>
@media screen and (max-width: 600px) {
  .movercontainer {
    display: none;
  }
}

html,
body {
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.movercontainer {
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

.autocol {
  margin: auto;
}

.sponsorlogo {
  object-fit: contain;
  height: 100px;
}
</style>
