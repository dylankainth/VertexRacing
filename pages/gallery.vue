<template>
  <div id="app">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-3" data-aos="fade-left">
          <h1 class="display-3 fw-bold lh-1 mb-3">Gallery</h1>
          <p class="lead">Check out the Gallery</p>
        </div>
        <div class="col-10 col-sm-8 col-lg-9" data-aos="fade-right">
          <img
            src="~/assets/gallerypage.PNG"
            class="d-block mx-lg-auto img-fluid"
            alt="Vertex Car"
            width="auto"
            height="1000px"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col" v-for="image in images">
          <div
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            :style="
              'background-image: url(' +
              image.pathLong +
              '); background-size:cover'
            "
            data-aos="zoom-in-up"
          >
            <div
              style="height: 500px !important"
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js',
          integrity:
            'sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D',
          crossorigin: 'anonymous',
        },
      ],
    }
  },
  name: 'SectionOurClients',
  data() {
    return {
      images: [],
    }
  },

  mounted() {
    this.importAll(require.context('../assets/gallery/', true, /\.jpg$/))
    this.importAll(require.context('../assets/gallery/', true, /\.gif$/))
    this.importAll(require.context('../assets/gallery/', true, /\.PNG$/))
    this.importAll(require.context('../assets/gallery/', true, /\.webp$/))
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script>

<style scoped></style>
