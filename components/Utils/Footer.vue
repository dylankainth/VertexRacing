<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <div class="col-md-4 d-flex align-items-center">
        <span class="text-muted">© 2022, Vertex Racing</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-muted" href="https://twitter.com/vertexracingf1"
            ><i class="bi bi-twitter"></i
          ></a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="https://www.instagram.com/vertexracingf1/"
            ><i class="bi bi-instagram"></i
          ></a>
        </li>
        <li class="ms-3">
          <a
            class="text-muted"
            href="https://www.linkedin.com/company/vertex-racing/"
            ><i class="bi bi-linkedin"></i
          ></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css',
      },
    ],
  },
}
</script>
