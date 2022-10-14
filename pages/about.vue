<template>
  <div id="app">
    <UtilsHeader title="About" descriptor="About the team" image="about" />

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
        <div class="col-lg-4" v-for="member in members" :key="member.name">
          <a :href="member.url" style="text-decoration: none; color: black">
            <img
              loading="lazy"
              :src="require(`~/assets/faces/${member.image}`)"
              class="img rounded-circle face"
              alt="..."
            />

            <h2 class="pt-3">{{ member.name }}</h2>
            <p>
              {{ member.shortDescriptor }}
            </p>
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="px-4 py-5 my-5 text-center" data-aos="zoom-in-up">
        <h1 class="display-6 fw-bold">
          We Joined FLEVAH, An International F1 in Schools Collaboration
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            FLEVAH is a collaboration of six teams from around the world.
          </p>
        </div>
      </div>
    </div>

    <div
      class="container px-4 py-5 marketing"
      id="featured-3"
      data-aos="zoom-in-up"
    >
      <h2 class="pb-2 border-bottom">Collaborators</h2>
      <div class="row pt-4">
        <div
          class="col-lg-4"
          v-for="collaborator in collaborators"
          :key="collaborator.name"
        >
          <a :href="collaborator.link">
            <img
              loading="lazy"
              :src="require(`~/assets/collaboratorlogos/${collaborator.image}`)"
              class="img rounded-circle face"
              alt="..."
            />
          </a>

          <h2 class="pt-3">{{ collaborator.name }}</h2>
          <p>
            <img
              style="width: 50px; height: auto"
              :src="
                require(`~/assets/collaboratorlogos/flags/${collaborator.flag}`)
              "
            />
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
      collaborators: [
        {
          name: 'Hypernova',
          image: 'hypernova.webp',
          link: 'https://hypernovaf1.wixsite.com/hypernova',
          flag: 'wales.png',
        },
        {
          name: 'ena',
          image: 'ena.jpg',
          link: 'https://www.instagram.com/ena_racing/',
          flag: 'france.png',
        },
        {
          name: 'astro7',
          image: 'astro7.jpg',
          link: 'https://www.instagram.com/astro7racing/',
          flag: 'mexico.png',
        },
        {
          name: 'LaChiron',
          image: 'lachiron.jpg',
          link: 'https://fox-wolverine-wgmm.squarespace.com/',
          flag: 'ireland.png',
        },
        {
          name: 'teamfalco',
          image: 'teamfalco.jpg',
          link: 'https://www.instagram.com/teamfalco_f1inschools/',
          flag: 'india.png',
        },
      ],
      members: [
        {
          name: 'June',
          image: 'june.png',
          url: 'https://mezzotravell.wordpress.com',
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
          url: 'https://www.dylankainth.com',
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
          url: 'https://perceptronv.github.io/',
          shortDescriptor: `Vincent loves anything AI, physics and design related. He joined Vertex with the hope of building a car to break the 1s barrier.`,
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
          shortDescriptor: `Andrew is the happy and friendly everybody's man. He manages sponsorship and liases with companies via email.`,
          longDescriptor: `Andrew is the happy and friendly everybody's man. He runs the Vertex Team email account, query form, and the sponsor excel sheet, ensuring that the team sends the correct sponsorship portfolio or sponsorship package to the relevant companies. He is in charge of replying to any queries and, if necessary, forwarding them on to the Team Manager or any other team members.`,
        },
        {
          name: 'Justin',
          image: 'justin.png',
          shortDescriptor: `Justin is an F1 enthusiast and swimmer. He enjoys playing videogames and has a passion for engineering.`,
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
  width: 100%;
  background-size: cover;
}
</style>
