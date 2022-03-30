<template>
  <div class="shadow-sm bg-white">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 container"
    >
      <nuxt-link
        to="/"
        class="d-flex align-items-center mb-3 mb-lg-0 text-dark text-decoration-none"
      >
        <img
          class="bi me-2"
          width="50"
          height="50"
          role="img"
          src="/logo.png"
          aria-label="Logo"
        />
        <span class="fs-2" style="font-weight: 100">VERTEX RACING</span>
      </nuxt-link>

      <ul
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
        style="font-weight: 300"
      >
        <li>
          <nuxt-link to="/" class="nav-link px-3 link-secondary"
            >HOME</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/about" class="nav-link px-3 link-dark"
            >ABOUT US</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/contact" class="nav-link px-3 link-dark"
            >CONTACT</nuxt-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
nav-link {
  font-weight: 300;
  font-size: medium;
}
</style>
