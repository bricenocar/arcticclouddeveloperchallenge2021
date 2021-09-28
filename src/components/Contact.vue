<template>
  <div class="container-fluid contact">
    <!-- <div class="row contact"> -->
      <div class="container">
         
        <div class="column overview">
       <h3 class="title">Contact us!</h3>
       
        <p>
          Follow Dexter the Lynx on Twitter
          <a href="https://twitter.com/intent/user?screen_name=ArcticCloudDev"
            ><span>@ArcticCloudDev</span></a
          >
        </p>
        <p>
          Follow Dexter the Lynx on 
          <a href="https://www.facebook.com/ArcticCloudDeveloperChallenge/"
            ><span
              >Facebook</span
            ></a
          >
        </p>
        <p>
          Follow Dexter the Lynx on
          <a href="https://www.linkedin.com/company/arctic-cloud-developer-challenge/"><span>LinkedIn</span></a></p>
      </div>
            <div class="row devider">
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Community Members</h4>
                    <p class="card-text">
                       <ul>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/ulrikke/"><img src="../assets/images/linkedin.svg" /></a></span><p> Ulrikke Akerbæk</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/jarleengseth/"><img src="../assets/images/linkedin.svg" /></a></span> <p>Jarle Engseth</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/carlos-briceno84/"><img src="../assets/images/linkedin.svg" /></a></span><p> Carlos Briceno</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/sandsor/"><img src="../assets/images/linkedin.svg" /></a></span><p> Thomas Sandsør</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/mariusborresen/"><img src="../assets/images/linkedin.svg" /></a></span><p> Marius Børresen</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/ragnhild-baumann-b1400839/"><img src="../assets/images/linkedin.svg" /></a></span><p> Ragnhild Baumann</p></li>
             
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Judges 2021</h4>
                    <p class="card-text">
                       <ul>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/merethestave/"><img src="../assets/images/linkedin.svg" /></a></span><p> Merethe Stave</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/marius-agur-hagelund-lind-b925223a/"><img src="../assets/images/linkedin.svg" /></a></span><p> Marius Agur</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/mikaels/"><img src="../assets/images/linkedin.svg" /></a></span><p> Mikael Svenson</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/idabergum/"><img src="../assets/images/linkedin.svg" /></a></span><p> Ida Bergum</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/martinehrnst/"><img src="../assets/images/linkedin.svg" /></a></span><p> Martin Erhnst</p></li>
                       
                       </ul>                  
                    </p>
                </div>
              </div>
            </div>
            </div>
          </div>
    <!-- </div>         -->
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
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}
.contact h1{
  color: #adc002;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}
.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
  color: #adc002;
}
.contact ul {
  list-style-type: none;
}
.contact ul p{
  text-align: left;
}
.contact h4{
  color: #adc002;
  font-size:20pt;
  font-weight:bold;
  text-align: center;
}
.contact .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #adc002;
}
.contact p {
  color: white;
  padding-top:3px;
}
.contact .lightbrowntitle {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
}
.linkedinicon{
  width:20px;
  float:left;
  margin-right:5px;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
  padding-bottom: 10px;
}
.contact .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
</style>