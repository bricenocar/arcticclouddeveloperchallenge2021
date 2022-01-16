<template>
  <div class="container-fluid body-container">
    <div class="row quickSummary">
      <div class="container">
        <div class="main-section-top">
          <div class="row logo-container">
            <img class="logotop" src="../assets/images/2022/home.svg" />
            <div class="registerbuttoncontainer">
              <div class="registerbutton">
                <router-link class="registerbuttonlink" to="/register"
                  ><div class="register-text">REGISTER TODAY</div></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row about">
      <div class="about-container">
        <div class="ms-Grid about-content" dir="ltr">
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <img class="aboutimage" src="../assets/images/2022/about.svg" />
          </div>
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <div class="about-text">
              <p>
                <span class="bold-text">ACDC</span> is a 3 day Norwegian
                hackathon focusing on Microsoft cloud technology, such as
                Microsoft 365, Dynamics 365, IOT, Azure ML and Power Platform.
                <br /><br />Our goal is to push technology to new limits while
                we learn from each other and socialize. This great event has
                been hosted for over 10 years at the beautiful Voksenåsen.
                <br /><br />
                <span class="bold-text">Place:</span> Voksenåsen Culture and
                Conference Hotel (Ullveien 4, 0791 Oslo)
                <br />
                <span class="bold-text">Date:</span> From 10th february to 13th
                february
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row theCampSite">
      <div class="campsite-container">
        <div class="ms-Grid theCampSiteHeader">
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <h1 class="lightgreentitle">The campsite</h1>
            <p>
              Venue is the venerable Voksenåsen Hotel, located in the hills
              surrounding Oslo.
            </p>
            <p>
              We encourage all participants to stay at the hotel for the event.
            </p>
            <p>
              We will handle room bookings, and as you see from the conference
              fee most of what you'll need is covered so you can focus on waging
              the ultimate cloud battle.
            </p>
            <div class="theCampSiteFooter">
              <img
                class="theCampSiteIcon"
                src="../assets/images/logo-voksenaasen.svg"
              />
            </div>
          </div>
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <img class="campsite-image" src="../assets/images/voksenåsen.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="row theaward">
      <div class="theaward-container">
        <div class="ms-Grid theaward-content" dir="ltr">
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <img class="antlers" src="../assets/images/acdc_antlers.jpg" />
            <p>
              The winning team get to take home the ANTLERS to keep until next
              challenge.<br /><br />And all the glory they can carry!
            </p>
          </div>
          <div class="margincolumn ms-Grid-col ms-sm12 ms-md6 ms-lg6">
            <img
              class="theawardimage"
              src="../assets/images/2022/the_award.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row judges">
      <div class="judges-container">
        <h1 class="title">Judges</h1>
        <div class="judges-content">
          <b-card-group deck>
            <b-card
              title="Ahmad Najjar"
              img-src="https://media-exp1.licdn.com/dms/image/C4E03AQFjSs7jn9LXzw/profile-displayphoto-shrink_400_400/0/1628173766436?e=1648080000&v=beta&t=CnvhoAn1gg2ehLbHPIC-vrusrIj94uZZ2RvMJJH5mT0"
              img-alt="Image"
              img-top
              class="judge-picture"
            >
              <b-card-text class="blacktext">
                Ahmad is an enthusiastic developer heart and soul and a senior
                consultant based in Oslo at Infoworker. He is also an active
                co-organizer for events and hackathons. Ahmad is a subject
                matter expert in Microsoft Power Platform, where "more and more"
                they are becoming his full-time focus areas!
              </b-card-text>
            </b-card>
            <b-card
              title="Sanna Diana Tomren"
              img-src="https://www.kode24.no/images/74972514.jpg?imageId=74972514&x=0&y=0&cropw=100&croph=100&width=640&height=640"
              img-alt="Image"
              img-top
              class="judge-picture"
            >
              <b-card-text class="blacktext">
                Sanna Diana is a technologist with expertise in cloud
                technologies and cyber security. She secures cloud
                transformation projects in private and public companies, by
                hands-on technical implementation and development, to more
                high-level management consulting practices.
              </b-card-text>
            </b-card>
            <b-card
              title="Cathrine Wilhelmsen"
              img-src="https://media-exp1.licdn.com/dms/image/C4D03AQHvHTrCyC1u7A/profile-displayphoto-shrink_400_400/0/1634880917934?e=1648080000&v=beta&t=PZ4RsJtJp6Cq1bmppCs7iv-VV6oco6PgvfqsDZMwuQQ"
              img-alt="Image"
              img-top
              class="judge-picture"
            >
              <b-card-text class="blacktext">
                She has over 12 years experience as a developer, architect and
                consultant on the Azure and Microsoft Data Platforms. Her focus
                is on Business Intelligence, Data Warehousing, Data Integration,
                Analytics, and Reporting projects.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div class="judges-content">
          <b-card-group deck>
            <b-card
              title="Harald Fianbakken"
              img-src="https://media-exp1.licdn.com/dms/image/C5603AQGZll1o6-2mkw/profile-displayphoto-shrink_400_400/0/1516287492819?e=1648080000&v=beta&t=IRPvzeCuIb5Ui04ecYU7a2QRf3dwHZY27Z3EVk1r6g4"
              img-alt="Image"
              img-top
              class="judge-picture"
            >
              <b-card-text class="blacktext">
                Long experience helping partners with their digital
                transformation journey - accelerating their practices around
                Cloud Application Development and Infrastructure automation and
                building innovating solutions. Speaker and Cloud enthusiast.
                Cloud and Datacenter management MVP - prior to working for
                Microsoft.
              </b-card-text>
            </b-card>
            <b-card
              title="Lasse Nordvik Wedø"
              img-src="https://1811msignite20prodeast.blob.core.windows.net/26313avatar/r/53288875/biggest.png?sv=2014-02-14&sr=c&si=avatarUpload&sig=olisVMA8qYtTKv1brHi%2B10clt31R5oEElPfYBg7r%2F4w%3D"
              img-alt="Image"
              img-top
              class="judge-picture"
            >
              <b-card-text class="blacktext">
                Lasse Nordvik Wedø is an international speaker
                (https://sessionize.com/lawedo), blogger and a solutions
                architect, with a strong focus on Unified Communications and
                Collaboration. He has more than 20 years of experience working
                hands-on with small and large scale IT-Infrastructure in many
                different industries.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
    <div class="row categories">
      <div class="categories-container">
        <h1 class="title">Categories</h1>
        <div class="categories-content">
          <b-card-group deck>
            <b-card class="category-card" title="Excelent user experience">
              <b-card-text class="blacktext">
                Visually appealing and an engaging experience surpassing
                expectations of simplicity, attractiveness and a look that just
                speaks of blings.
              </b-card-text>
            </b-card>
            <b-card class="category-card" title="Most Extreme Business Value">
              <b-card-text class="blacktext">
                Running a business is tough. Usable Solutions, Feasable ideas,
                Real World Scenarios.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div class="judges-content">
          <b-card-group deck>
            <b-card class="category-card" title="Rock Solid Geeknes">
              <b-card-text class="blacktext">
                Best use of tools and technologies.
              </b-card-text>
            </b-card>
            <b-card class="category-card" title="Killer App">
              <b-card-text class="blacktext">
                Built the best killer app, the best solution
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
    <!--<div class="row categories">
      <div class="categories-container">
        <div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card
                bg-variant="primary"
                text-variant="white"
                header="Primary"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card
                bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card
                bg-variant="success"
                text-variant="white"
                header="Success"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card
                bg-variant="info"
                text-variant="white"
                header="Info"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card
                bg-variant="warning"
                text-variant="white"
                header="Warning"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card
                bg-variant="danger"
                text-variant="white"
                header="Danger"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card bg-variant="light" header="Light" class="text-center">
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card
                bg-variant="dark"
                header="Dark"
                text-variant="white"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>

              <b-card header="Default" class="text-center">
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </b-card-group>
          </div>
        </div>
      </div>
    </div>-->
    <div class="row contactus">
      <div class="contactus-container">
        <div class="ms-Grid contactus-content" dir="ltr">
          <div class="ms-sm12 ms-md12 ms-lg12">
            <img
              class="contactusimage"
              src="../assets/images/2022/bg2-contac.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row contactusfooter">
      <div class="contactusfooter-container">
        <div class="ms-Grid contactusfooter-content" dir="ltr">
          <div class="ms-sm12 ms-md12 ms-lg12">
            <p>
              <span>inf@arcticclouddeveloperchalenge.net</span
              ><br /><br />Follow Dexter the Lynx
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { gmapsMap, gmapsMarker } from "x5-gmaps";
export default {
  name: "Home",
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.body-container {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.margincolumn {
  display: flex;
  flex-direction: column;
}
.sponsacdcheader {
  width: 100%;
  margin-top: 50px;
}
.sponsacdcTitle h1 {
  color: #27343c;
  font-size: 30pt;
  font-weight: bold;
}
.sponsacdcContent {
  width: 100%;
}
.theLocation {
  width: 100%;
  height: 400px;
  background-color: grey;
}
.main-section-top {
  max-width: 678px;
  margin: auto;
}
.legoLeft {
  position: absolute;
  left: -5%;
}
.register-button-container {
  display: flex;
}
.logotop {
  margin: auto;
  width: 100%;
}
.legodividerimg {
  width: 100%;
  margin: auto;
}
.slogan-top {
  margin-top: -10%;
  font-size: 105pt;
  font-weight: 200;
  margin-bottom: -10%;
  justify-content: center;
}
.slogan-bottom {
  font-size: 140pt;
  font-weight: bold;
  margin-bottom: -5%;
  justify-content: center;
}
.logo-container {
  position: relative;
  height: 80vh;
}
.quickSummary {
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 100px;
}
.quickSummary .container {
  padding-top: 2em;
}
.quickSummary .event-date {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  color: #ffc800;
  text-align: right;
  width: 100%;
}
.registerbuttoncontainer {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20vh;
}
.registerbutton {
  bottom: 20%;
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: url("../assets/images/2022/boton.svg") no-repeat center;
}
.registerbuttonlink:hover {
  color: black;
  text-decoration: none;
}
.register-text {
  margin: auto;
  width: 100%;
  height: 100%;
  font-family: "Turtles";
  font-weight: normal;
  font-size: 42px;
  letter-spacing: 0px;
  color: #000000;
  text-shadow: 0px 1px 0px #ffffff;
  opacity: 1;
}
.registerbuttonlink {
  width: 80%;
  margin: 0 auto;
}
.registerbuttonlinkbottom {
  width: 50vw;
  margin: auto;
}
.registerbuttonbottom {
  color: black;
  display: block;
  background-color: #ffc800;
  border-radius: 6pt;
  padding: 1em;
  border: white 3pt solid;
  font-family: "Open Sans";
  font-weight: bold;
  margin-top: 3em;
}
.about {
  background: white;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  margin: auto;
  position: relative;
}
.about-container {
  position: absolute;
  height: 100vh;
  /* background: white; */
  background-image: url(../assets/images/2022/bg1.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  top: -170px;
}
.about-content {
  margin: auto;
  width: 80%;
  padding-top: 170px;
}
.about h1 {
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.about p {
  color: black;
  text-align: left;
  font-size: 27px;
}

.theaward {
  background: url("../assets/images/ninjaturtlebackground.jpeg");
  padding-top: 15vh;
  padding-bottom: 15vh;
  margin: auto;
  position: relative;
}
.theaward-container {
  height: 60vh;
  background: transparent;
  width: 100%;
  display: flex;
}
.theaward-content {
  margin: auto;
  width: 80%;
}

.theaward h1 {
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.theaward p {
  margin-top: 50px;
  color: white;
  text-align: left;
  font-size: 27px;
}
.theawardimage {
  max-height: 450px;
}

.contactus {
  background: white;
  margin: auto;
}
.contactus-container {
  background: white;
  width: 100%;
  display: flex;
}
.contactus-content {
  margin: auto;
}
.contactus p {
  color: black;
  text-align: center;
  font-size: 12pt;
}

.contactusfooter {
  background: white;
  margin: auto;
}
.contactusfooter-container {
  background: white;
  width: 100%;
  display: flex;
  height: 25vh;
}
.contactusfooter-content {
  margin: 0 auto;
}
.contactusfooter p {
  color: black;
  font-size: 12pt;
}

.rectangle {
  border: solid 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 90px;
}
.quickSummary h1 {
  padding-bottom: 15px;
}
.quickSummary h3 {
  color: white;
}
.quickSummary p {
  color: #6d7c90;
  font-weight: 900;
}

.sponsors {
  background: lightgray;
  background: url(../assets/images/background-graa.svg) no-repeat center;
  height: 30%;
  /* padding-top: 15vh; */
}
.sponsorsContainer {
  background: white;
  margin-top: 15vh;
  display: flex;
}
.sponsorsContent {
  background: white;
  flex-direction: column;
}
.sponsorsHeader {
  display: flex;
}
.sponsorsIcon {
  margin-right: 2em;
}
.sponsorsImg {
  margin-bottom: 15px;
  max-width: 315px;
  max-height: 315px;
  width: 100%;
  padding: 25px;
}
.sponsorsTitle h1 {
  color: black;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.divider {
  border: 1px solid white;
  width: 70%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.dragonHeadLeft {
  float: left;
  width: 85px;
  height: 65px;
  background: url("../assets/images/dragenhead_white_trans.png") no-repeat
    center;
  margin-top: -44px;
  margin-left: -61px;
}
.dragonHeadRight {
  float: right;
  width: 85px;
  height: 65px;
  background: url("../assets/images/dragenhead_right_white_trans.png") no-repeat
    center;
  margin-top: -50px;
  margin-right: -56px;
}
.logo1Rect {
  height: 20%;
  width: 45%;
  padding-top: 70px;
}
.antlers {
  max-width: 500px;
  width: 100%;
}
.antlersStraight {
  height: 65px;
  background: url("../assets/images/antlers_dark_trans.png") no-repeat center;
  margin-bottom: -9px;
}
.antlersScewed {
  height: 65px;
  background: url("../assets/images/antlers_dark_trans.png") no-repeat center;
  transform: rotate(180deg);
  margin-left: 35px;
  margin-top: -18px;
}
.antlersDivider {
  border: 1px solid #27343c;
  width: 100%;
  margin-bottom: 10px;
}
.thePriceToPay {
  background: lightgray;
  background: url(../assets/images/background-graa.svg) no-repeat center;
  height: 30%;
  /* padding-top: 15vh; */
}
.thePriceToPayContainer {
  background: white;
  margin-top: 15vh;
  display: flex;
}
.theCampSiteContainer {
  background: white;
  margin-top: 15vh;
  display: flex;
}
.thePriceToPayHeader {
  display: flex;
}
.thePriceToPayIcon {
  margin-right: 2em;
}
.thePriceToPayImg {
  margin-bottom: 15px;
  width: 315px;
  height: 315px;
  padding: 25px;
}
.thePriceToPayTitle h1 {
  color: black;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.thePriceToPayAmount {
  padding: 20px 10px;
  border: 3px solid black;
}
.thePriceToPayAmount h1 {
  color: black;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.thePriceToPayAmount p {
  color: #6d7c90;
  text-align: left;
  font-size: 12pt;
  font-weight: bold;
}
.thePriceToPayIncludes {
  margin-top: 10vh;
}
.thePriceToPayIncludes > ul > li {
  text-align: left;
  color: #6d7c90;
  font-size: 12pt;
}
.thePriceToPayIncludes p {
  text-align: left;
  color: #6d7c90;
  font-size: 12pt;
}
.thePriceToPaySubheader {
  margin-top: 10vh;
  display: flex;
}
.thePriceToPaySubheader img {
  width: 100%;
  max-width: 300px;
}
.thePriceToPaySubheader a {
  width: 100%;
  max-width: 300px;
}
.thePriceToPayContent {
  background: white;
  flex-direction: column;
}
.judges {
  background-size: cover;
}
.judges-container {
  height: 100%;
  background: white;
  display: block;
}
.judges-content {
  margin: auto;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.judgesTitle {
  margin-top: 30px;
}
.judgesTitle h1 {
  color: white;
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 30px;
}
.judgesContent {
  color: white;
  font-size: 30pt;
  margin-top: 5%;
  width: 80%;
  margin: auto;
}
.judge-picture img {
  max-height: 200px;
  max-width: 200px;
  align-self: center;
  border-radius: 49.9%;
}
.category-card {
}
.categories {
  background-size: cover;
  margin-top: 40px;
}
.categories-container {
  height: 100%;
  background: url("../assets/images/ninjaturtlebackground.jpeg");
  display: block;
}
.categories-content {
  margin: auto;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.categoriesTitle {
  margin-top: 30px;
}
.categoriesTitle h1 {
  color: white;
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 30px;
}
.categoriesContent {
  color: white;
  font-size: 30pt;
  margin-top: 5%;
  width: 80%;
  margin: auto;
}
.legodividerimg2 {
  width: 80%;
  margin: auto;
}
.darkenoverlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.judgeFrame {
  background: url("../assets/images/woodframe.png") no-repeat;
  padding: 10px 5px 5px 10px;
}
.judgeCard {
  padding: 1em 2em;
}
.card-title {
  font-family: "Turtles" !important;
  color: #84af0f;
  font-size: 24pt;
}
.judgeContent {
  height: 100%;
  padding: 0 20px;
}
.judgePicture {
  margin-bottom: 15px;
  max-width: 250px;
  margin: auto;
  padding: 30px;
}
.judgePictureImg {
  margin-bottom: 15px;
  width: 100%;
}
.judgeTitle {
  color: white;
  font-size: 30pt;
  margin-bottom: 15px;
}
.judgeDescription {
  font-size: 12pt;
  color: #6d7c90;
  margin: 0px 1.75vw;
}
.darktext {
  color: #fff;
}
.bottomspacing {
  margin-bottom: 3em;
}
.campsite-image {
  width: 100%;
}
.theCampSite {
  background: white;
  padding-top: 15vh;
  flex-direction: column;
  padding-bottom: 15vh;
}
.theCampSiteHeader {
  display: flex;
  width: 80%;
  margin: auto;
}
.theCampSiteHeader h1 {
  text-align: left;
  font-weight: bold;
}
.theCampSiteHeader p {
  color: #000000;
  text-align: left;
  font-size: 27px;
}
.theCampSiteFooter {
  display: flex;
}
.theCampSiteIcon {
  margin-right: 2em;
}
.theCampSiteTitle {
  display: flex;
  flex-direction: column;
}
.theCampSiteContent {
  color: #6d7c90;
  font-size: 30px;
  background-color: white;
}
.antlersStraightWhite {
  height: 71px;
  background: url("../assets/images/antlers_allwhite_trans.png") no-repeat
    center;
  margin-bottom: -9px;
}
.antlersScewedWhite {
  height: 69px;
  background: url("../assets/images/antlers_allwhite_trans.png") no-repeat
    center;
  transform: rotate(180deg);
  margin-left: 35px;
  margin-top: -18px;
}
.antlersDividerWhite {
  border: 1px solid white;
  width: 100%;
  margin-bottom: 10px;
}
.theCampsiteTitle {
  color: white;
  font-size: 2.5rem;
}
.theCampSiteContent {
  margin-top: 80px;
  color: white;
  font-size: 30pt;
  text-align: left;
  text-shadow: 1px 1px #27343c;
}
.theCampsiteSubTitle {
  color: white;
  font-size: 30pt;
  margin-bottom: 15px;
  font-family: "Roboto Condensed", Georgia, Times, serif;
}
.sponsorSilverLogo {
  max-width: 200px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.sponsorGoldLogo {
  max-width: 300px;
}
.sponsorGoldContainer {
  margin-bottom: 40px;
  margin-top: 60px;
}

.legoyellow {
  overflow-x: hidden;
  position: absolute;
  left: 80vw;
  top: 75vh;
}

.legoredleft {
  overflow-x: hidden;
  position: absolute;
  left: 20%;
  top: 85vh;
}

.legoblue {
  overflow-x: hidden;
  position: absolute;
  left: 65vw;
  top: 94vh;
}

.legoredright {
  overflow-x: hidden;
  position: absolute;
  left: 88vw;
  top: 99vh;
}

.separator {
  height: 25vh;
}

.line-style {
  height: 10%;
}
.donation img {
  float: left;
  margin-right: 10px;
}
.donation {
  text-align: justify;
}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .main-section-top {
    max-width: 650px;
    margin: auto;
  }
  .logotop {
    max-width: 80%;
  }
  .legodividerimg {
    width: 80%;
  }
  .legodivider {
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
  }

  .slogan-top {
    font-size: 4em;
  }
  .slogan-bottom {
    font-size: 6em;
  }
  .quickSummary .event-date {
    margin: auto;
    width: 80%;
  }
  .registerbuttoncontainer {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 20vh;
  }

  .registerbutton {
    margin: 0 auto;
    bottom: 20%;
    height: 70px;
    width: 80%;
    align-items: center;
    justify-content: center;
    background: url("../assets/images/2022/boton.svg") no-repeat center;
    background-size: contain;
  }
  .registerbuttonlink:hover {
    color: black;
    text-decoration: none;
  }
  .register-text {
    margin: auto;
    width: 100%;
    height: 100%;
    font-family: "Turtles";
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0px;
    color: #000000;
    text-shadow: 0px 1px 0px #ffffff;
    opacity: 1;
  }
  .registerbuttonlink {
    width: 80%;
    margin: 0 auto;
  }
  .about-container {
    width: 106%;
  }
  .aboutimage {
    width: 100%;
  }
  .about p {
    font-size: 18px;
  }
  .about-content {
    margin: auto;
    width: 80%;
    padding-top: 0px;
  }
  .theaward {
    height: 100%;
  }
  .theaward-container {
    height: 100%;
    display: block;
  }
  .theaward-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .theaward p {
    font-size: 18px;
  }
  .margincolumn {
    margin: 20px 0;
  }
  .theawardimage {
    max-height: 350px;
  }
  .contactusimage {
    width: 100%;
  }
  .brikk {
    max-width: 35vw;
  }
  .legoredleft {
    position: absolute;
    left: 0;
    top: 120vh;
  }
  .legoyellow {
    position: absolute;
    right: 0;
    top: 115vh;
  }
  .legoblue {
    position: absolute;
    left: 60vw;
    top: 127vh;
  }
  .legoredright {
    display: none;
  }

  .aboutContent {
    background-color: transparent;
  }

  .aboutTitle h1 {
    font-size: 30pt;
  }
  .aboutTitle p {
    font-size: 12pt;
  }
  .theAwardTitle h1 {
    font-size: 30pt;
  }
  .theAwardTitle p {
    font-size: 12pt;
  }
  .thePriceToPay {
    padding-top: 0;
  }
  .thePriceToPayIcon {
    display: none;
  }
  .thePriceToPayTitle h1 {
    font-size: 30pt;
  }
  .thePriceToPayHeader {
    width: 100%;
  }
  .thePriceToPayTitle p {
    font-size: 12pt;
  }
  .thePriceToPayAmount h1 {
    font-size: 30pt;
  }
  .thePriceToPayAmount p {
    font-size: 12pt;
  }
  .thePriceToPayIncludes {
    margin-top: 10vh;
  }
  .thePriceToPayIncludes > ul > li {
    text-align: left;
    color: #6d7c90;
    font-size: 12pt;
  }
  .sponsorsIcon {
    display: none;
  }
  .sponsorsHeader {
    width: 100%;
  }
  .sponsorsContent {
    margin-left: 35px;
  }
  .theCampSiteHeader p {
    color: #000000;
    text-align: left;
    font-size: 18px;
  }
  .theCampSiteHeader {
    width: 80%;
    flex-direction: column;
  }
  .theCampSiteIcon {
    max-width: 200px;
  }
  .categoryTitle {
    margin: 0px 10vw;
  }
  .categoryDescription {
    margin: 0px 10vw;
  }
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .theAward {
    padding-top: 70px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .thePriceToPayTitle {
    font-size: 2.5rem;
  }
  .brikk {
    display: none;
  }
  .judgesContent {
    padding: 0;
  }
  .About {
    padding-top: 5vh;
  }
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 920px) and (max-device-width: 1600px) {
  .legoyellow {
    overflow-x: hidden;
    position: absolute;
    left: 80vw;
    top: 110vh;
  }

  .registerbuttoncontainer {
    bottom: 10vh;
  }

  .legoredleft {
    overflow-x: hidden;
    position: absolute;
    left: 25%;
    top: 119vh;
  }

  .legoblue {
    overflow-x: hidden;
    position: absolute;
    left: 65vw;
    top: 124vh;
  }

  .legoredright {
    overflow-x: hidden;
    position: absolute;
    left: 88vw;
    top: 130vh;
  }
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .thePriceToPayTitle {
    font-size: 2.5rem;
  }
  .legoyellow {
    display: none;
  }
}
/* ----------- iPhone X ----------- */
/* Portrait and Landscape */
@media only screen and (min-device-width: 180px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .theAward {
    padding-top: 70px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .thePriceToPayTitle {
    font-size: 2.5rem;
  }
  .logo2right {
    position: unset;
  }
  .brikk {
    display: none;
  }
  .About {
    padding-top: 5vh;
  }
}
</style>