<template>
  <div class="container-fluid overview-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title">Previous events</h1>
          <p>
            <video-embed
              ref="youtube"
              css="embed-responsive-16by9"
              src="https://www.youtube.com/watch?v=MG2lQlGLLmM"
            ></video-embed>
          </p>
          <p>
            <video-embed
              ref="youtube"
              css="embed-responsive-16by9"
              src="https://youtu.be/BeFcDY8-PX8"
            ></video-embed>
          </p>
          <p>
            <video-embed
              ref="youtube"
              css="embed-responsive-16by9"
              src="https://youtu.be/z5HYGWnkjHc"
            ></video-embed>
          </p>
        </div>
        <div class="greenbutton">
          <!-- <router-link to="/galleri"
                  ><div class="register-text">Go to image gallery</div></router-link
                > -->
          <a href="https://arcticclouddeveloperchallenge.net/#/Galleri"
            >Go to image gallery</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "previous", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.greenbutton {
  width: 100%;
  background: url("../assets/images/2022/boton.svg") no-repeat center;
  background-size: contain;
  /* background-position-x: left; */
  height: 60px;
  bottom: 20px;
}
.greenbutton a {
  font-family: "Turtles";
  font-weight: normal;
  font-size: 26px;
  letter-spacing: 0px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
</style>