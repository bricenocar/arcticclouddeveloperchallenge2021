<template>
  <div class="container-fluid">
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
  height: 100vh;
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
  width: 106%;
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
  background: white;
  height: 60vh;
  margin: auto;
  position: relative;
}
.theaward-container {
  height: 60vh;
  background: white;
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
  color: black;
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
.categories {
  background: white;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin: auto;
  position: relative;
}
.categories-container {
  height: 100vh;
  width: 106%;
  display: flex;
  top: -170px;
}
.categories-content {
  margin: auto;
  width: 80%;
  padding-top: 170px;
}
.categories h1 {
  text-align: left;
  font-size: 30pt;
  font-weight: bold;
}
.categories p {
  color: black;
  text-align: left;
  font-size: 27px;
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
    background: white;
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