<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template> 

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header: Header,
    Footer: Footer
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:Light");
@import url("https://fonts.googleapis.com/css?family=Nobile");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans");
@font-face { 
    font-family: "Turtles";
    src: url("assets/fonts/Turtles.otf"); 
}
@font-face { 
    font-family: "Rubik";
    src: url("assets/fonts/Rubik-VariableFont_wght.ttf"); 
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Rubik", Georgia, Times, serif !important;
}

a{
  font-family: "Rubik", Helvetica, Arial, sans-serif;
}

p{
  font-family: "Rubik", Helvetica, Arial, sans-serif;
}

@import url("https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: 12pt;
}
#app ul {
  padding: 0;
  list-style-type: none;
}

body {
  font-family: "Rubik", Georgia, Times, serif;
  overflow-x: hidden;
}

h2 {
  margin: 0px;
}

h5{
  font-size: 2rem;
}

h6 {
  margin: 0px;
  color: #777;
}

.wrapper {
  text-align: center;
}

.yellowtitle{
  color:#FBB90F;
}

.browntitle{
  color:#5B4F43;
}

.lightbrowntitle {
  color:#fff0df;
}

.lightgreentitle {
  color:#84AF0F;
}

.blacktext {
  color:black;
}

.bold-text {
  font-weight: bold;
}

.overview-header {
  padding: 20px;
  text-align: left;
  background: white;
  background: url("./assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 10vh;
  padding-bottom: 40px;
}

.title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #84af0f;
  font-family: "Turtles" !important;
}
.titleSmall {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #84af0f;
  font-family: "Turtles" !important;
  font-size: 26px;
}
@media only screen and (min-device-width: 800px) {
  .overview p {
    font-size: 25px;
    padding: 0 20px;
  }
  .overview h3{
    font-size: 50px;
  }
  .overview h4{
    font-size: 40px;
    padding: 0 20px;
  }
}

</style>
