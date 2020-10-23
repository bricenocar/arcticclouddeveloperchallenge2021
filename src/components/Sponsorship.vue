<template>
    <div class="container-fluid sponsorship">
      <div class="container">
        <div class="row">
         
            <h3 class="title">Sponsorship packages</h3>
            <div class="row legodivider">
            <img class="legodividerimg2" src="../assets/images/legoline.svg" />
          </div>
            <h4 class="title">Information about the sponsor packages?</h4>
             <div class="column overview">
            <p><b>Package 1</b></p>
            <p>Dinner saturday</p>
            <p><b>Package 1</b></p>
            <p>Dinner saturday</p>
            <p><b>Package 1</b></p>
            <p>Dinner saturday</p>
           </div>
          </div>
        </div>      
    </div>
</template>

<script>
export default {
  name: "Sponsorship", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>


.sponsorship {
  padding: 20px;
  text-align: left;
   background: white;
   background: url(../assets/images/background-legos.svg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.sponsorship .title {
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
    color: #000;
}
.sponsorship ul {
  list-style-type: none;
}
.sponsorship p {
  color: #000;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>