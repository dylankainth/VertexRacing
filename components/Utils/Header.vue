<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-9 autocol" data-aos="fade-right">
        <img
          :src="require(`~/assets/${image}page.png`)"
          class="d-block img-fluid"
          alt="Vertex Car"
          width="auto"
          height="1000px"
        />
      </div>
      <div class="col-lg-3" data-aos="fade-left">
        <h1 class="display-3 fw-bold lh-1 mb-3 text-center text-lg-start">
          {{ title }}
        </h1>
        <p class="lead text-center text-lg-start">{{ descriptor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'descriptor', 'image'],
  mounted() {
    const images = document.getElementsByTagName('img')
    for (let image of images) {
      image.addEventListener('load', fadeImg)
      image.style.opacity = '0'
    }

    function fadeImg() {
      this.style.transition = 'opacity 2s'
      this.style.opacity = '1'
    }
  },
}
</script>

<style scoped>
.autocol {
  margin: auto;
}
</style>
