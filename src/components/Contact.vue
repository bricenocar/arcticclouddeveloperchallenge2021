<template>
  <div class="container-fluid">
    <div class="row contact">
      <div class="col-md-12 overview">
        <h3>Contact us!</h3>
        <div class="row legodivider">
          <img class="legodividerimg3" src="../assets/images/legoline.svg" />
        </div>
        <p>
          Follow Dexter the Lynx on Twitter
          <a href="https://twitter.com/intent/user?screen_name=SPChallenge"
            ><span>@SPChallenge</span></a
          >
        </p>
        <p>
          Follow Dexter the Lynx on Facebook
          <a href="https://www.facebook.com/ArcticCloudDeveloperChallenge/"
            ><span
              >https://www.facebook.com/ArcticCloudDeveloperChallenge/</span
            ></a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.contact {
  padding: 20px;
  background: white;
  background: url(../assets/images/background-graa.svg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}

.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
  color: black;
}

.contact .lightbrowntitle {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>