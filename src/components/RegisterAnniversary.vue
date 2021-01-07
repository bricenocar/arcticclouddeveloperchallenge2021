<template>
    <div class="container-fluid">
      <div class="row contact">
        <div class="col-md-12">
          <h3 class="title">Register for the Anniversary event, registration is subject to a noshow fee</h3>
           <iframe width="1024px" height="2024px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=-bM9M7wUjUOYLzc2t8hWPjQfhCIhnt1Ai4WyHKngBC5UMjY0N0xESzlXOFFHREQ1UjJETUZTS0xDVSQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:260vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'RegisterAnniversary', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
.contact {
  padding: 20px;
   background: white;
   background: url(../assets/images/background-graa.svg) no-repeat
    center; 
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}

.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>