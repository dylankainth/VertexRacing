<template>
  <div id="app">
    <UtilsHeader
      title="Gallery"
      descriptor="View the gallery"
      image="gallery"
    />

    <div class="container">
      <div class="px-4 py-5 my-5 text-center" data-aos="zoom-in-up">
        <h1 class="display-6 fw-bold">
          "The car looks like a highly decorated bullet"
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            - George C, Circa may 2022.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col" v-for="image in images" :key="image">
          <div
            loading="lazy"
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
