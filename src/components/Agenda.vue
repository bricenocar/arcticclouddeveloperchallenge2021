<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h1>Agenda</h1>
          <div class="row devider">
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Thursday 10 February</h4>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Check-in and rigging</p></li>
                        <li><p><span class="yellowtitle">0900</span> Welcome and Keynote</p></li>
                        <li><p><span class="yellowtitle">1000</span> Teams presentations</p></li>
                        <li><p><span class="yellowtitle">1030</span> Challenge kick-off</p></li>
                        <li><p><span class="yellowtitle">1130</span> Early Delivery Deadline</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Jury Duty and Snacks</p></li>
                        <li><p><span class="yellowtitle">1900</span> Point and Crowns</p></li>
                        <li><p><span class="yellowtitle">1930</span> Dinner and SharePint</p></li>              
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Friday 11 February</h4>
                    <p class="card-text">
                       <ul>                        
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Jury Duty and Snacks</p></li>
                        <li><p><span class="yellowtitle">1700</span> 5-kamp</p></li>
                        <li><p><span class="yellowtitle">1900</span> Points and Crowns</p></li>
                        <li><p><span class="yellowtitle">1930</span> Geekfood + Geekbeer</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Saturday 12 February</h4>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Final Delivery and Demo Clean out the room! </p></li>
                        <li><p><span class="yellowtitle">1700</span> Free time</p></li>
                        <li><p><span class="yellowtitle">1900</span> Meetup @ bar</p></li>
                        <li><p><span class="yellowtitle">1930</span> Challenge fine dinner and Awards</p></li>
                        <li><p><span class="yellowtitle">2230</span> ACDC party</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-name">Sunday 13 February</h4>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">1100</span> Latest checkout</p></li>
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
  background: #2a2d35;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.agenda ul {
  list-style-type: none;
}
.agenda p {
  color:white;
}
.agenda .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
.agenda h1{
  color:white;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}

.agenda h4{
  color: white;
  font-size:20pt;
  font-weight:bold;
  text-align: left;
  margin-bottom: 10px;
}
.agenda .lightbrowntitle{
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>