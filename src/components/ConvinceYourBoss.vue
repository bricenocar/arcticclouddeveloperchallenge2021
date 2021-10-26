<template>
  <div class="container-fluid overview-header">
    <div class="container">
      <div class="row">
        <div class="column">
          <h1 class="title">Arctic Cloud Developer Challenge</h1>
          <div class="overview">
            <h4>What is Arctic Cloud Developer Challenge (ACDC)?</h4>
            <p>
              Arctic Cloud Developer Challenge is the most awesome hackaton in
              the Nordic. This is where the best developers compete against and
              learn from each other. Teams of consultants and IT professionals
              gather at Voksenaasen Hotel at the roof of Oslo for three days.
              They compete and collaborate to create solutions with the best
              business value using cutting edge technology!
              <br /><br />
              The competition if fierce - but friendly - and the most important
              is the knowledge we share.
            </p>
            <br />
            <h4>Technology</h4>
            <p>
              During these three day hackathon we focusing on Microsoft
              technology, such as Microsoft 365, SharePoint, Dynamics 365, IOT.
              Azure, ML, big data and Power Platform. Our goal is to push
              technology to new limits while we learn from each other and
              socialize. No-coders and pro-coders all have a blast; diverse
              teams with all types of developers have suceeded best in the past.
            </p>
            <br />
            <h4>Agenda</h4>
            <p>
              This great event has been hosted for over 10 years at the
              beautiful Voksenåsen hotel at the top of Holmenkollen in Oslo. We
              kick things off Thursday morning and stay at the hotel troughout
              the competition until final delivery Saturday afternoon. All teams
              are located in the same room, filled with music, sweat, beer,
              laughter and friendly figthing create this great community
              feeling. We all look forward to a fun outdoors activity after
              final delivery where we get some fresh air before the award dinner
              at Saturday night.
              <br /><br />
              ACDC is the highlight of the year; it's when we get to see our
              friends and play with all the cool new toys on the platform!
            </p>
            <br />
            <h4>Judges</h4>
            <p>
              Acdc is a bit different from other hackathons. There are judges
              who each have their domain speciality. Points are being awarded in
              these different domains; the categories. These categories can be
              Azure, Dynamics 365, Office 365, etc. The categories tend to
              change a little bit each year, and we give our judges freedom to
              tailor their category to fit their domain speciality. If you need
              help during the event our judges are there to help you out, and we
              also encourge teams to help each other if they have an expert on
              an area.
            </p>
            <br />
            <h4>Points</h4>
            <p>
              Each team can gain from 0 to 100 points in each category each day.
              How many points the team accuires depend on their achievement in
              said category. If you "won" a category one day, it does not mean
              you will win the next day too. At the end of each day the judges
              will go around to each team and they will demonstrate what they
              have created so far.
            </p>
            <br />
            <h4>Challenges</h4>
            <p>
              Special challenges are being announced troughout the hackaton and
              provide a chance to gain extra points. During the event a public
              leaderboard will be available so that off-site people can follow
              the competition.
            </p>
            <br />
            <h4>Blog</h4>
            <p>
              Each team get access to the ACDC.blog where they write posts about
              what they make - and claim points in the different categories.
              These posts makes it easier for the judges to follow the team's
              progress and they work as documentation for after the event.
            </p>
            <br />
            <h4>Awards</h4>
            <p>
              At the end of the three days all teams get to present their
              complete solution to the judges. They count the final points in
              each category and vote for their favorites. The winner is
              announced at the award dinner on Saturday evening - and then we
              party hard!
              <br /><br />
              It's all about learning - but winning does feel good :)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overview", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.overview p {
  color: white;
  font-size: 18px;
  padding: 0 20px;
  text-align: left;
}
.overview h1 {
  color: black;
  text-align: center;
  font-size: 50pt;
  font-weight: bold;
}
.overview h4 {
  color: #84af0f;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.convinceyourboss {
  padding: 20px;
  text-align: left;
  background: white;
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.convinceyourboss ul {
  list-style-type: none;
}
.column {
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>