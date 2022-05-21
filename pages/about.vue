<template>
  <div id="app">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-3" data-aos="fade-left">
          <h1 class="display-3 fw-bold lh-1 mb-3">About</h1>
          <p class="lead">About the team</p>
        </div>
        <div class="col-10 col-sm-8 col-lg-9" data-aos="fade-right">
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

    <div class="container">
      <div class="px-4 py-5 my-5 text-center" data-aos="zoom-in-up">
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
    </div>

    <div
      class="container px-4 py-5 marketing"
      id="featured-3"
      data-aos="zoom-in-up"
    >
      <h2 class="pb-2 border-bottom">Meet the team</h2>
      <div class="row pt-4">
        <div class="col-lg-4" v-for="member in members">
          <img
            :src="require(`~/assets/faces/${member.image}`)"
            class="img rounded-circle face"
            alt="..."
          />

          <h2 class="pt-3">{{ member.name }}</h2>
          <p>
            {{ member.shortDescriptor }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'June',
          image: 'june.png',
          shortDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing.`,
          longDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing. Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.`,
        },
        {
          name: 'Dylan',
          image: 'dylan.png',
          shortDescriptor: `Dylan is a tech enthusiast from London, UK; In his free time, he enjoys microelectronics and programming.`,
          longDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing. Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.`,
        },
        {
          name: 'Vincent',
          image: 'vincent.png',
          shortDescriptor: `Vincent is easily charmed by everything AI...`,
          longDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing. Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.`,
        },
        {
          name: 'Andrew',
          image: 'andrew.png',
          shortDescriptor: `Andrew is awesome`,
          longDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing. Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.`,
        },
        {
          name: 'Justin',
          image: 'justin.png',
          shortDescriptor: `justin sits behind me in compski`,
          longDescriptor: `June is from South Korean student with a passion for Medicine and
            essay writing. Therefore, he joined the team to transfer his research and
            persuasive skills to the benefit of Vertex Racing. He leads, manages
            and organises the team to all it to achieve its goals. He is also in
            charge of the production of the team portfolios (Enterprise and
            Research & Development) and pit display on Adobe Illustrator and
            InDesign, as well as the maintenance of the company email and
            website. When he has spare time, June also runs fluid simulations of
            the car on Solidworks to help Justin maximise the car aerodynamic
            performance.`,
        },
      ],
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

.face {
  width: 25vw;
}
</style>
