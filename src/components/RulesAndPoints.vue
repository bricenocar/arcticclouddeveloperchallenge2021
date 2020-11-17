<template>
    <div class="container-fluid rulesandpoints">
      <div class="container">
        <div class="row ">
          <div class="column overview">
            <h1 class="title">Rules and Points</h1>
            <div class="row legodivider">
              <img class="legodividerimg3" src="../assets/images/legoline.svg" />
            </div>
            <h4>Categories</h4>
            <br>
            <p>Each of the judges have 10 points to give out to each team for each of these categories every day:</p>

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
            <p>Each day the team that get the most points for each category gets a crown, at the end of the hackaton the total category winners can take the crowns home.</p>
            <p>The crowns are there so that the current category leaders can feel proud and brag to the other teams about it.</p>
            <p>The crowns can be lost to another team the next day if they get more points in the category than the current category leaders.</p>

            <p>At the end of the hackaton each team have to deliver a short written presentation of the solution they have created to the judges.</p>
            <p>Each judge then has 100 points each to hand out to the team they feel deserves it the most.</p>

            <p>The maximum amount of achiveable points before the 100 wildcard points the last day will then be a total of: 6 categories * 10 points * X(Amount of judges) * 3 days of hacking.</p>
            <p>Example of maximum points for a team before wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking =  1080 points</p>
            <p>Example of maximum points for a team before after wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking + 600 wildcard points =  1680 points</p> 
            
            <h4 class="yellowtitle">The Grand Finale</h4>
            <p>The last day of the hackaton each team has to deliver a short written presentation of the solution they have created to the judges.</p>
            <p>The judges now has to make the final decisions of wich teams that deserves to get the wildcard points.</p>
            <p>At the fine dinner the last day of the hackaton the judges will present the solutions of the top 3 teams with the most points.</p> 
            <p>The judges starts presenting the solution winning the 3 place, then the second and at the end they present the winning team and the solution they have created.</p> 
            <h4 class="yellowtitle">The winning team gets to take home the antlers and also gets to inscribe theire company name at the very honorable winning teams plate placed on the antlers.</h4>
            <p>The winning team then gets to keep the antlers for 1 year until the next ACDC event.</p> 
          </div>
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
  padding-bottom: 40px;
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
  font-size: 50pt;
  font-weight: bold;
}
.rulesandpoints h4{
  color: #6d7c90;
  text-align: center;
  font-size: 30pt;
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