<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h1 class="title">Agenda</h1>
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
                        <li><p><span class="yellowtitle">0900</span> Ladies and gentlemen. Start your engines. Get your setups ready, and make sure you have enough coffee</p></li>
                        <li><p><span class="yellowtitle">0930</span> Words from Microsoft Norway saying welcome to this awesom event!</p></li>
                        <li><p><span class="yellowtitle">1000</span> Introduction of the rules with personal introductions per referee</p></li>
                        <li><p><span class="yellowtitle">1030</span> Let's GO!!</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <p>All day - judges check in to see what is going on and offer help</p>
                        <p>Late night - Points and badges!</p>
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
                        
                        <li><p><span class="yellowtitle">0900</span> Start your enginges</p></li>
                        <li><p><span class="yellowtitle">1100-1130</span> Lightning talk 1</p></li>
                        <li><p><span class="yellowtitle">1130-1200</span> Lightning talk 2</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1400-1430</span> Lightning talk 3 </p></li>
                        <li><p><span class="yellowtitle">1600</span> Lightning talk 4</p></li>
                        <p>All day - judges check in to see what is going on and offer help</p>
                        <p>Late night - Points and badges!</p>
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
                        <li><p><span class="yellowtitle">0900</span> GO TIME!</p></li>
                        <li><p><span class="yellowtitle">1600</span> All submissions of projects due! (Video presentation)</p></li>
                        <li><p><span class="yellowtitle">1630</span> Points and Badges </p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Sunday 07 February</h4>
                    <p class="card-text">
                       Live event announcing the winners of th 2021 ACDC                  
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
  color: #000;
}
.agenda p {
  color: #000;
}
.agenda .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
.agenda h1{
  color:black;
  text-align: center;
  font-size: 50pt;
  font-weight: bold;
}
.agenda h4{
  color: #6d7c90;
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