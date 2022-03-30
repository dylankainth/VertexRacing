<template>
  <div>
    <UtilsNavbar />
    <main>
      <Nuxt />
    </main>
    <UtilsFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    AOS.init({})
  },
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
</style>
