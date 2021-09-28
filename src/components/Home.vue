<template>
  <div>
    <div class="container-fluid">
      <div class="row quickSummary">
        <div class="container">
          <div class="main-section-top">
            <div class="row logo-container">
              <img class="logotop" src="../assets/images/logo-2021.svg" />
            </div>
            <div class="row legodivider">
              <img class="legodividerimg" src="../assets/images/legoline.svg" />
            </div>
            <div class="row legodivider">
              <img
                class="legodividerimg"
                src="../assets/images/texto-home.svg"
              />
            </div>
            <div class="row legodivider">
              <p class="event-date">February 10-13th</p>
            </div>
            <div class="row legodevider">
              <router-link
                class="registerbuttonlink registerbutton"
                to="/register"
                >REGISTER TODAY</router-link
              >
            </div>
            <div class="row separator"></div>
          </div>
        </div>
        <div class="aboutHeader">
          <div class="categoriesIcon">
            <img
              class="categoryIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="aboutTitle">
            <h1>About</h1>
            <p>
              ACDC is a 3 day Norwegian hackathon focusing on Microsoft
              Cloud technology, such as M365, D365, Azure, Teams, IOT, ML, Power BI. 
              <br />
              Our goal is to see if we can push the technology to its limits, while we learn from each other and socialize. 
              <br />
              This great event has been hosted for over 10 years at the beautiful
              Voksenåsen. <br />
              Follow us on
              <a href="https://www.youtube.com/watch?v=8Mhds_Ueqsc">YouTube</a>
            </p>
          </div>
        </div>
        
        <div class="theAwardHeader">
          <div class="categoriesIcon">
            <img
              class="theAwardIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="theAwardTitle">
            <h1>The award</h1>
            <img class="antlers" src="../assets/images/acdc_antlers.jpg" />
            <p>
              The winning team get to take home the ANTLERS to keep until next
              challenge.
            </p>
            <p>And all the glory they can carry!</p>
          </div>
        </div>
      </div>
      <!--<div class="row About">
        <div class="aboutHeader">
          <div class="categoriesIcon">
            <img
              class="categoryIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="aboutTitle">
            <h1>About</h1>
            <p>
              ACDC is a 3 day Norwegian hackathon focusing on Microsoft
              technology, such as Microsoft 365, SharePoint, Dynamics 365, IOT.
              Azure, ML, Power BI. <br />Our goal is to push technology to new
              limits while we learn from each other and socialize. This great
              event has been hosted for over 10 years at the beautiful
              Voksenåsen. <br />Follow us on
              <a href="https://www.youtube.com/watch?v=8Mhds_Ueqsc">YouTube</a>
            </p>
          </div>
        </div>
      </div>-->
      <!--<div class="row Categories">
        <div class="categoriesHeader">
          <div class="categoriesIcon">
            <img
              class="categoryIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="categoriesTitle">
            <h1>Categories</h1>
          </div>
        </div>
        <div class="container">
          <div class="categoriesContent">
            <div class="row">
              <div class="categoryCard col-md-4">
                <div class="categoryContent">
                  <div class="categoryPicture">
                    <img
                      class="categoryPictureImg"
                      src="../assets/badges/Badges 2014-CommunityChamp.png"
                    />
                  </div>
                  <div class="categoryTitle">
                    <h2>TBA</h2>
                  </div>
                  <div class="categoryDescription">
                    <p>We are working on it!</p>
                  </div>
                </div>
              </div>
              <div class="categoryCard col-md-4">
                <div class="categoryContent">
                  <div class="categoryPicture">
                    <img
                      class="categoryPictureImg"
                      src="../assets/badges/Badges 2014-CommunityChamp.png"
                    />
                  </div>
                  <div class="categoryTitle">
                    <h2>TBA</h2>
                  </div>
                  <div class="categoryDescription">
                    <p>We are working on it!</p>
                  </div>
                </div>
              </div>
              <div class="categoryCard col-md-4">
                <div class="categoryContent">
                  <div class="categoryPicture">
                    <img
                      class="categoryPictureImg"
                      src="../assets/badges/Badges 2014-CommunityChamp.png"
                    />
                  </div>
                  <div class="categoryTitle">
                    <h2>TBA</h2>
                  </div>
                  <div class="categoryDescription">
                    <p>We are working on it!</p>
                  </div>
                </div>
              </div>
              <div class="categoryCard col-md-6">
                <div class="categoryContent">
                  <div class="categoryPicture">
                    <img
                      class="categoryPictureImg"
                      src="../assets/badges/Badges 2014-CommunityChamp.png"
                    />
                  </div>
                  <div class="categoryTitle">
                    <h2>TBA</h2>
                  </div>
                  <div class="categoryDescription">
                    <p>We are working on it!</p>
                  </div>
                </div>
              </div>
              <div class="categoryCard col-md-6">
                <div class="categoryContent">
                  <div class="categoryPicture">
                    <img
                      class="categoryPictureImg"
                      src="../assets/badges/Badges 2014-CommunityChamp.png"
                    />
                  </div>
                  <div class="categoryTitle">
                    <h2>TBA</h2>
                  </div>
                  <div class="categoryDescription">
                    <p>We are working on it!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!--<div class="row theAward">
        <div class="aboutHeader">
          <div class="categoriesIcon">
            <img
              class="categoryIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="aboutTitle">
            <h1>About</h1>
            <p>
              ACDC is a 3 day Norwegian hackathon focusing on Microsoft
              technology, such as Microsoft 365, SharePoint, Dynamics 365, IOT.
              Azure, ML, Power BI. <br />Our goal is to push technology to new
              limits while we learn from each other and socialize. This great
              event has been hosted for over 10 years at the beautiful
              Voksenåsen. <br />Follow us on
              <a href="https://www.youtube.com/watch?v=8Mhds_Ueqsc">YouTube</a>
            </p>
          </div>
        </div>
        
        <div class="theAwardHeader">
          <div class="categoriesIcon">
            <img
              class="theAwardIcon"
              src="../assets/badges/Badges 2014-CommunityChamp.png"
            />
          </div>
          <div class="theAwardTitle">
            <h1>The award</h1>
            <img class="antlers" src="../assets/images/acdc_antlers.jpg" />
            <p>
              The winning team get to take home the ANTLERS to keep until next
              challenge.
            </p>
            <p>And all the glory they can carry!</p>
          </div>
        </div>
      </div>-->
      <!--<div class="row judges">
        <div class="container">
          <div class="judgesTitle darktext">
            <h1>Judges</h1>
          </div>
          <div class="row legodivider">
            <img class="legodividerimg2" src="../assets/images/legoline.svg" />
          </div>
        </div>
        <div class="judgesContent">
          <div class="row">
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/ninjaturtleface.jpg"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/ninjaturtleface.jpg"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/ninjaturtleface.jpg"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-6">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/ninjaturtleface.jpg"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-6">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/ninjaturtleface.jpg"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row separator"></div>
        </div>
      </div>-->
      <!--<div class="row thePriceToPay">
        <div class="container">
          <div class="thePriceToPayContainer">
            <div class="thePriceToPayHeader">
              <div class="thePriceToPayIcon">
                <img
                  class="thePriceToPayIconImg"
                  src="../assets/images/icon-bilette.svg"
                />
              </div>
            </div>
            <div class="thePriceToPayContent">
              <div class="thePriceToPayTitle">
                <h1>Tickets</h1>
              </div>
              <div class="thePriceToPayAmount">
                <p>From</p>
                <p></p>
                <h1>10.000 NOK</h1>
                <p>excluding VAT</p>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!--<div class="row sponsors">
        <div class="container">
          <div class="sponsorsContainer">
            <div class="sponsorsHeader">
              <div class="sponsorsIcon">
                <p>
                  <img
                    class="sponsorsIconImg"
                    src="../assets/images/icon-bilette.svg"
                  />
                </p>
              </div>
              <div class="sponsorsContent">
                <div class="sponsorsTitle">
                  <h1>Sponsors</h1>
                  <p>
                    <img
                      class="sponsorsImg"
                      src="../assets/sponsors/microsoft.png"
                    />
                  </p>
                   <p><img class="sponsorsImg" src="../assets/sponsors/PointTaken-Logo-White.png"/></p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!--<router-link class="registerbuttonlinkbottom registerbuttonbottom" to="/chart">SCOREBOARD</router-link>-->
      <!--<a
          class="registerbuttonlinkbottom"
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=-bM9M7wUjUOYLzc2t8hWPlPngU499LtNtryHiN0d-t5UQU4wVlJCTlQ2MVY2Q1VLVDUxVDhTQ1hPWSQlQCN0PWcu"
          target="_blank"
        >
          <div class="registerbuttonbottom">REGISTER TODAY</div>
        </a>-->
    </div>

    <!-- <div class="row theCampSite">
        <div class="container theCampSiteContainer">
          <div class="theCampSiteHeader">
            <div class="theCampSiteIconContainer">
              <img
                class="theCampSiteIcon"
                src="../assets/images/icon-campsite.svg"
              />
            </div>
            <div class="theCampSiteTitle">
              <h1>The campsite</h1>
              <p>
                Venue is the venerable Voksenåsen Hotel, located in the hills
                surrounding Oslo.
              </p>
              <p>
                We encourage all participants to stay at the hotel for the
                event.
              </p>
              <p>
                We will handle room bookings, and as you see from the conference
                fee most of what you'll need is covered so you can focus on
                waging the ultimate cloud battle.
              </p>
              <div class="theCampSiteFooter">
                <img
                  class="theCampSiteIcon"
                  src="../assets/images/logo-voksenaasen.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </div>
  <!-- <div class="theLocation">
      <gmaps-map :options="mapOptions">
        <gmaps-marker :position="{ lat: 59.96, lng: 10.665 }" />
      </gmaps-map>
    </div>
  </div> -->
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
.logotop {
  margin: auto;
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
.registerbutton {
  color: black;
  background-color: #ffc800;
  border-radius: 6pt;
  padding: 1em;
  border: rgb(29, 29, 29) 3pt solid;
  font-family: "Open Sans";
  font-weight: bold;
}
.legoleftpicture {
  max-width: 450px;
}
.legodivider {
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.quickSummary {
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
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
.registerbuttonlink {
  width: 50vw;
  margin-left: 200px;
}
.registerButton {
  font-size: 30pt;
  font-weight: 500;
  line-height: 1.2;
  color: #ffc800;
  text-align: right;
  width: 100%;
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

.theAward {
  background: white;
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  height: 30%;
  padding-top: 15vh;
  padding-bottom: 15vh;
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
.theAwardTitle h1 {
  color: #adc002;
  font-size: 30pt;
  text-align: left;
  font-weight: bold;
}
.theAwardContent {
  margin-top: 2vh;
  color: #6d7c90;
  font-size: 12pt;
  margin-bottom: 80px;
  text-align: left;
}
.theAwardTitle p {
  color: white;
  text-align: left;
  font-size: 12pt;
}
.theAwardHeader {
  display: flex;
  width: 60%;
  margin: auto;
}
.theAwardIcon {
  margin-right: 2em;
}
.About {
  background: white;
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
  /* background: url(../assets/images/background-legos.svg) no-repeat center; */
  height: 30%;
  padding-top: 9vh;
  flex-direction: column;
}
.aboutHeader {
  display: flex;
  width: 60%;
  margin: auto;
  margin-bottom: 10vh;;
}
.aboutHeader h1 {
  color: #adc002;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.aboutHeader p {
  color: white;
  text-align: left;
  font-size: 12pt;
}

.Categories {
  background: lightgray;
  background: url(../assets/images/background-legos.svg) no-repeat center;
  height: 30%;
  padding-top: 15vh;
  flex-direction: column;
}
.categoriesHeader {
  display: flex;
  width: 60%;
  margin: auto;
}
.categoriesHeader h1 {
  color: black;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.categoriesHeader p {
  color: #6d7c90;
  text-align: left;
  font-size: 12pt;
}
.categoryIcon {
  margin-right: 2em;
}
.categoriesTitle {
  display: flex;
  flex-direction: column;
}
.categoriesContent {
  color: #6d7c90;
  font-size: 30pt;
  background-color: white;
}
.categoryCard {
  padding: 1em 2em;
}
.categoryContent {
  background-color: white;
  height: 100%;
}
.categoryPicture {
  width: 100%;
}
.categoryPictureImg {
  margin-bottom: 15px;
  max-width: 315px;
  max-height: 315px;
  padding: 25px;
  width: 100%;
}
.categoryTitle {
  font-size: 30pt;
  color: black;
  margin: 0px 1.75vw;
}
.categoryTitle h2 {
  font-weight: bold;
}
.categoryDescription {
  font-size: 12pt;
  color: #6d7c90;
  margin: 0px 1.75vw;
}
.categoriesCatTitle {
  text-align: left;
  color: white;
  font-size: 30pt;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: "Roboto Condensed", Georgia, Times, serif;
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
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat
    center;
  background-size: cover;
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
.theCampSite {
  background: white;
  padding-top: 15vh;
  flex-direction: column;
  padding-bottom: 15vh;
}
.theCampSiteHeader {
  display: flex;
  width: 60%;
  margin: auto;
}
.theCampSiteHeader h1 {
  color: black;
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.theCampSiteHeader p {
  color: #6d7c90;
  text-align: left;
  font-size: 12pt;
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
  height: 10vh;
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
  .registerbuttonlink {
    margin: auto;
    width: 80%;
    text-align: center;
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
  /* .categoriesHeader {
    width: 90%;
  } */
  .categoriesContent {
    background-color: transparent;
  }
  .categoriesIcon {
    display: none;
  }
  .categoryIcon {
    margin-right: 1em;
  }
  .categoriesTitle h1 {
    font-size: 30pt;
  }
  .categoriesTitle p {
    font-size: 12pt;
  }
  /* .aboutHeader {
    width: 90%;
  } */
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
  .theCampSiteTitle h1 {
    font-size: 30pt;
  }
  .theCampSiteTitle p {
    font-size: 12pt;
  }
  .theCampSiteHeader {
    display: flex;
    width: 100%;
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