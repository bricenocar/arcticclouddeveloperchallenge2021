<template>
    <div class="container-fluid ">
        <div class="row rulesandpoints">
          <div class="container">
            <div class="col-md-12">
            <h1>Rules and Points</h1>
            <div class="row legodivider">
              <img class="legodividerimg3" src="../assets/images/legoline.svg" />
            </div>
            </div>
            <h4>Categories</h4>
            <br>
            <p>Each of the judges have  from 1-10 points to give out to each team for each of these categories every day:</p>

            <p><b>Blow my Mindstorm</b></p>
            <p>If a Lego could speak, what would it say? Connect the Lego to the cloud and find out</p>
            <p>Keywords: IOT, Azure, “DevOps” </p>

            <p><b>Lego Power Bricks</b></p>
            <p>Emmet the Lego works hard every day, but can he work smarter?</p>
            <p>Keywords: Power Automate, Power Apps, Power BI, Power Virtual Agent</p>

            <p><b>The Duplo invasion</b></p>
            <p>Ohh no, there have been sightings of Duplo in the city. What can we do?</p>
            <p>Keywords: Keyvault, GDPR, Secured Services</p>

            <p><b>The hidden lego empire</b></p>
            <p>Rumors of mythical Lego creations live among us all. Can you find them?</p>
            <p>Keywords: AR/VR</p>

            <p><b>Legoland</b></p>
            <p>Happy camper, spread the love, show your team spirit!</p>
            <p>Keywords: Help others, build stuff, be positive</p>

            <p><b>Lego Shark Tank</b></p>
            <p>Running a business is tough. Do you have what it takes, or will you get FIRED?</p>
            <p>Keywords: Usable Solutions, Feasable ideas, Real World Scenarios</p>

            <h4 class="yellowtitle">Judging</h4>
            <p>Every judge can hand out a maximum of 60 points to each team at every jury duty each day (6 categories * 10 points = 60 points max).</p>
            <p>This year badges are back. Each team can get upto 30 badges. Each badge gives 10 points.</p>
            <p>Each day the team that get the most points for each category gets a Teams background to be used until next evaulation.</p>
            <p>The Teams background can be lost to another team the next day if they get more points in the category than the current category leaders.</p>
            <p>At Final Jury Delivery each judge has 100 points each to hand out to the team they feel deserves it the most.</p>

            <p>The maximum amount of achiveable points before the 100 wildcard points the last day will then be a total of: 6 categories * 10 points * X(Amount of judges) * 3 days of hacking + 300 points for badges.</p>
            <p>Example of maximum points for a team before wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking  + 300 points for badges =  1380 points</p>
            <p>Example of maximum points for a team after wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking + 300 points for badges + 600 wildcard points =  1980 points</p> 
            
            <h4 class="yellowtitle">The Grand Finale</h4>
            <p>The last day of the hackaton each team has to deliver a short written presentation of the solution they have created as a blog post.</p>
            <p>The judges now has to make the final decisions of wich teams that deserves to get the wildcard points.</p>
            <p>The judges will present top 3 teams, and finally announce the winner of ACDC 2021</p> 
            <h4 class="yellowtitle">The winning team gets to take home the antlers and also gets to inscribe theire company name at the very honorable winning teams plate placed on the antlers.</h4>
            <p>The winning team then gets to keep the antlers for 1 year until the next ACDC event.</p> 
          </div>
          </div>     
    </div>
</template>

<script>
export default {
  name: "RulesAndPoints", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>


.rulesandpoints {
  padding: 20px;
  text-align: left;
   background: white;
   background: url(../assets/images/background-graa.svg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}
.rulesandpoints .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #000;
}
.rulesandpoints ul {
  list-style-type: none;
}
.rulesandpoints p {
  color: #000;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
.rulesandpoints h1{
  color: black;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}
.rulesandpoints h4{
  color: black;
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
}
.rulesandpoints p{
  color: #6d7c90;
  text-align: left;
  font-size: 15pt;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>