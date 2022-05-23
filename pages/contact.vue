<template>
  <div id="app">
    <UtilsHeader
      title="Contact"
      descriptor="Contact the team"
      image="contact"
    />

    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-6 fw-bold">Get in touch.</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Don’t hesitate to reach out with the contact information below, or
          send a message using the form.
          <br />
          <br />
          Whether you would like to contact about prospective sponsorship or
          even general questions, we would love to hear from you!
        </p>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3">
      <h2 class="pb-2 border-bottom">Enquiries</h2>
      <div class="row pt-4">
        <iframe
          width="640px"
          height="480px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=UBzjllrT0UicvFq7UcsWiEIssA9j1A5GsW-Uzoc94INUMzEwV0FMWlJNNFlER1AyWTVUWlZDRFlGWC4u&embed=true"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width: 100%; max-height: 100vh"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
        >
        </iframe>
      </div>
    </div>

    <div class="container px-4 py-5 marketing" id="featured-3">
      <h2 class="pb-2 border-bottom">From our socials</h2>
      <div class="row pt-4">
        <a
          class="twitter-timeline"
          data-width="500"
          data-height="500"
          data-theme="light"
          href="https://twitter.com/vertexracingf1?ref_src=twsrc%5Etfw"
          >Tweets by vertexracingf1</a
        >
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
          src: 'https://platform.twitter.com/widgets.js',
          body: true,
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
</style>
