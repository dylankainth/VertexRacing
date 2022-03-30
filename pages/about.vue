<template>
  <div id="app">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-3">
          <h1 class="display-3 fw-bold lh-1 mb-3">About</h1>
          <p class="lead">About the team</p>
        </div>
        <div class="col-10 col-sm-8 col-lg-9">
          <img
            src="~/assets/aboutpage.PNG"
            class="d-block mx-lg-auto img-fluid"
            alt="Vertex Car"
            width="auto"
            height="1000px"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-6 fw-bold">
        A Team of Motorsport, Engineering, Designing and Business Enthusiasts
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Vertex Racing was founded in 2020 with the purpose of taking part in
          the 2021 F1 in schools competition, the team is made up of five
          members.
        </p>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3">
      <h2 class="pb-2 border-bottom">Meet the team</h2>
      <div class="row pt-4">
        <div class="col-lg-4">
          <img
            src="~/assets/faces/june.png"
            class="img rounded-circle face"
            alt="..."
          />

          <h2 class="pt-3">June</h2>
          <p>
            June is from South Korean student with a passion for Medicine and
            essay writing.
            <!-- Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.-->
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div class="col-lg-4">
          <img
            src="~/assets/faces/dylan.png"
            class="img rounded-circle face"
            alt="..."
          />

          <h2 class="pt-3">Dylan</h2>
          <p>Server guy...</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div class="col-lg-4">
          <img
            src="~/assets/faces/vincent.png"
            class="img rounded-circle face"
            alt="..."
          />

          <h2 class="pt-3">Vincent</h2>
          <p>AI guy...</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            src="~/assets/faces/justin.png"
            class="img rounded-circle face"
            alt="..."
          />

          <h2 class="pt-3">Justin</h2>
          <p>Mechanical guy...</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img img rounded-circle face"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <h2 class="pt-3">Andrew</h2>
          <p>Rugby guy...</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
    </div>
  </div>
</template>

<script></script>

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

.face {
  width: 100%;
}
</style>
