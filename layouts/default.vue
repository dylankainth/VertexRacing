<template>
  <div>
    <UtilsNavbar />
    <main>
      <Nuxt />
    </main>
    <UtilsFooter />
  </div>
</template>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
