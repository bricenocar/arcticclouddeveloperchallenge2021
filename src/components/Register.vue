<template>
  <div class="container-fluid overview-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title">
            Register your team here, registration is binding
          </h1>
          <iframe
            width="1024px"
            height="2024px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=-bM9M7wUjUOYLzc2t8hWPuELJf8HUnlNoyQLcDPDWu5UN0hLMkJLUEFUNDE3ODlGTUVWSTBBUTQ2Ry4u&embed=true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style="border: none; max-width: 100%; max-height: 260vh"
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.register {
  padding: 20px;
  background: white;
  background: url(../assets/images/ninjaturtlebackground.jpeg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  /* padding-bottom: 40%; */
}

.register h3 {
  margin-top: 20px;
  margin-bottom: 30px;
}

.register .lightgreentitle {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
}
</style>