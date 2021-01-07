<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h1>Agenda</h1>
             <div class="row legodivider">
              <img class="legodividerimg3" src="../assets/images/legoline.svg" />
            </div>
          <div class="row devider">
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Thursday 04 February</h4>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Check-in and rigging</p></li>
                        <li><p><span class="yellowtitle">0900</span> Welcome and Keynote</p></li>
                        <li><p><span class="yellowtitle">1000</span> Team presentations</p></li>
                        <li><p><span class="yellowtitle">1030</span> Challenge kick-off</p></li>
                        <li><p><span class="yellowtitle">1130</span> Early Delivery Deadline</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1500</span> Points</p></li>
                        <li><p><span class="yellowtitle">1700</span> Virtual Pints</p></li>
                        <li><p><span class="yellowtitle">2030</span> Head 2 Head Challenge</p></li>              
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Friday 05 February</h4>
                    <p class="card-text">
                       <ul>
                        
                        <li><p><span class="yellowtitle">0800</span> Morning Glory</p></li>
                        <li><p><span class="yellowtitle">0900</span> Jury Summary</p></li>
                        <li><p><span class="yellowtitle">1130</span> Points</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1500</span> Points </p></li>
                        <li><p><span class="yellowtitle">1800</span> Virtual Pints</p></li>
                        <li><p><span class="yellowtitle">2100</span> Fun and games</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Saturday 06 February</h4>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Morning Glory</p></li>
                        <li><p><span class="yellowtitle">0900</span> Jury Summary</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1500</span> Final delivery</p></li>
                        <li><p><span class="yellowtitle">1600</span> Awards</p></li>
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
  name: 'Agenda', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
.agenda {
  padding: 20px;
  text-align: left;
  background: black;
  background: url(../assets/images/background-graa.svg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.agenda ul {
  list-style-type: none;
}
.agenda .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  color: black;
}
.agenda p {
  color:#6d7c90;
}
.agenda .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
.agenda h1{
  color:black;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}

.agenda h4{
  color: black;
  font-size:20pt;
  font-weight:bold;
  text-align: center;
}
.agenda .lightbrowntitle .title {
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>