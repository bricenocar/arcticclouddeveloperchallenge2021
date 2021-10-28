<template>
  <div class="container-fluid overview-header contact">
    <div class="container">
      <div class="row">
        <div class="column">
          <h1 class="title">Contact us!</h1>
          <div class="overview">
            <div class="row devider">
            <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h4>Community Members</h4>
                    <p class="card-text">
                       <ul>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/ulrikke/"><img src="../assets/images/linkedin.svg" /></a></span><p> Ulrikke Akerbæk</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/jarleengseth/"><img src="../assets/images/linkedin.svg" /></a></span> <p>Jarle Engseth</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/carlos-briceno84/"><img src="../assets/images/linkedin.svg" /></a></span><p> Carlos Briceno</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/sandsor/"><img src="../assets/images/linkedin.svg" /></a></span><p> Thomas Sandsør</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/mariusborresen/"><img src="../assets/images/linkedin.svg" /></a></span><p> Marius Børresen</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/ragnhild-baumann-b1400839/"><img src="../assets/images/linkedin.svg" /></a></span><p> Ragnhild Baumann</p></li>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/eirik-christiansen-29343811/"><img src="../assets/images/linkedin.svg" /></a></span><p> Eirik Christiansen</p></li>
                      </ul>
                    </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                  <div class="card-body">
                    <h4>Follow us</h4>
                    <p class="card-text">
                      <ul>
                        <li>Dexter the Lynx on Twitter <a href="https://twitter.com/intent/user?screen_name=ArcticCloudDev"><span>@ArcticCloudDev</span></a></li>
                        <li>Dexter the Lynx on <a href="https://www.facebook.com/ArcticCloudDeveloperChallenge/"><span>Facebook</span></a><li>
                        <li>Dexter the Lynx on <a href="https://www.linkedin.com/company/arctic-cloud-developer-challenge/"><span>LinkedIn</span></a></li>
                        </ul>
                    </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Judges 2022</h4>
                    <p class="card-text">
                       <ul>
                        <li><span class="linkedinicon"><a href="https://www.linkedin.com/in/cathrinewilhelmsen/"><img src="../assets/images/linkedin.svg" /></a></span><p> Cathrine Wilhelmsen</p></li>
                        <li><span class="linkedinicon"><img src="../assets/images/linkedin.svg" /></span><p> TBA</p></li>
                        <li><span class="linkedinicon"><img src="../assets/images/linkedin.svg" /></span><p> TBA</p></li>
                        <li><span class="linkedinicon"><img src="../assets/images/linkedin.svg" /></span><p> TBA</p></li>
                        <li><span class="linkedinicon"><img src="../assets/images/linkedin.svg" /></span><p> TBA</p></li>

                       </ul>
                    </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
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
  /* padding: 20px;
  background-size: cover;
  height: 40%;
  padding-top: 40px;*/ 
  padding-bottom: 40%;
} 
/* .contact h1{
  color: #adc002;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
} */
.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
  color: #84af0f;
}
.contact ul {
  list-style-type: none;
}
.contact ul p{
  text-align: left;
}
/* 
.contact h4{
  color: #adc002;
  font-size:20pt;
} */
.contact p {
  color: white;
  padding-top:3px;
}

.linkedinicon{
  width:18px;
  float:left;
  margin-right:5px;
}
.overview .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
  height: 340px;
}
h4.card-name {
  text-align: left;
}
</style>