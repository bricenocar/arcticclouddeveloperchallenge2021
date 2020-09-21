<template>
  <div class="container-fluid">
    <div v-responsive="['hidden-all','xl']" class="legoLeft">
      <img class="legoleftpicture" src="../assets/images/biglego.svg" />
    </div>
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
            <img class="legodividerimg" src="../assets/images/texto-home.svg" />
          </div>
          <div class="row legodivider">
            <p class="event-date">February 8th-12th 2021</p>
          </div>
          <div class="row legodivider">
            <a class="registerbuttonlink" href="/">
              <div class="registerbutton">REGISTER TODAY</div>
            </a>
          </div>
          <div class="row separator"></div>
          <div class="legoyellow">
            <img class="brikk" src="../assets/images/legoyellow.svg" />
          </div>
          <div class="legoredleft">
            <img class="brikk" src="../assets/images/legoredleft.svg" />
          </div>
          <div class="legoblue">
            <img class="brikk" src="../assets/images/legoblue.svg" />
          </div>
          <div class="legoredright">
            <img class="brikk" src="../assets/images/legoredright.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="row Categories">
      <div class="categoriesHeader">
        <div class="categoriesIcon">
          <img class="categoryIcon" src="../assets/images/Icon-categories.svg" />
        </div>
        <div class="categoriesTitle">
          <h1>Categories</h1>
          <p>(Subject to change)</p>
        </div>
      </div>
      <div class="container">
        <div class="categoriesContent">
          <div class="row">
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/Mario.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>LEGO Super Mario power</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    Power users love tools and flexibility, so why not show them some by using tools available to the average
                    office and line worker out there. More power less code! Power Automate, Power Apps, Power BI, Power Virtual Agent
                  </p>
                </div>
              </div>
            </div>
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/HarryPotter.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>LEGO Harry Potter</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    Everything is so pretty, I can't take my eyes away! Applications are not all about functionality, they have to look pretty as well - why else have design manuals?
                    Glossy pixels, User interactive, Responsivenes
                  </p>
                </div>
              </div>
            </div>
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/BOOST.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>LEGO MINDSTORMS</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    All the tiny things, connected and online. Bring your IoT to the science fair!
                    Azure, IoT, DevOps
                  </p>
                </div>
              </div>
            </div>
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/StarWars.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>LEGO Star Wars</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    Cash is king, and nothing says cash like great business value.
                    Usable solutions, Feasable Ideas, Real world scenarios
                  </p>
                </div>
              </div>
            </div>
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/Ninjago.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>NINJAGO fortress</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    Secure your solutions, dont let Loki get past your gates!
                    Keyvaults, GDPR, Secured Services
                  </p>
                </div>
              </div>
            </div>
            <div class="categoryCard col-md-4">
              <div class="categoryContent">
                <div class="categoryPicture">
                  <img class="judgePicture" src="../assets/images/Marvel.svg" />
                </div>
                <div class="categoryTitle">
                  <h2>LEGO Marvel spirit</h2>
                </div>
                <div class="categoryDescription">
                  <p>
                    Be a happy camper, spread the love, show your amazing team spirit!
                    Help others in need, decorations, possitive vibes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row theAward">
      <div class="categoriesHeader">
        <div class="categoriesIcon">
          <img class="categoryIcon" src="../assets/images/icon-award.svg" />
        </div>
        <div class="categoriesTitle">
          <h1>The award</h1>
          <p>The winning team get to take home the BRICK TROPHY to keep</p>
          <p>until next challenge</p>
          <br />
          <p>And all the glory they can carry</p>
        </div>
      </div>
    </div>
    <div class="row judges">
      <div class="container">
        <div class="judgesContent">
          <div class="judgesTitle darktext">
            <h1>JUDGES</h1>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="judgeTitle darktext">
                <h2>Ahmad Najjar</h2>
              </div>
              <img class="judgePicture" src="../assets/judges/ahmad.png" />
              <div
                class="judgeDescription darktext"
              >Ahmad is an enthusiastic developer heart and soul and a senior consultant based in Oslo at Infoworker. He’s also an active co-organizer for events and hackathons.</div>

              <div class="judgeTitle darktext">
                <h2>Marc Anderson</h2>
              </div>
              <img class="judgePicture" src="../assets/judges/marc.png" />
              <div
                class="judgeDescription darktext"
              >Marc has over 35 years of experience in technology professional services and software development. Over a wide-ranging career in consulting as well as line manager positions.</div>
            </div>
            <div class="col-md-6">
              <div class="judgeTitle darktext">
                <h2>Mikael Svenson</h2>
              </div>
              <img class="judgePicture" src="../assets/judges/mikael.png" />
              <div
                class="judgeDescription darktext"
              >Principal Program Manager at Microsoft. Mikael has good insight in many technologies and platforms as well as experience as project manager and customer communicator.</div>

              <div class="judgeTitle darktext">
                <h2>Kim Noel</h2>
              </div>
              <img class="judgePicture" src="../assets/judges/kim.png" />
              <div
                class="judgeDescription darktext"
              >Creative engineer with excellent communication skills, team spirit, and adaptability. Her mission is to enable others to embrace uncertainty since there is no linear path to success.</div>
            </div>

            <div class="col-md-12">
              <div class="judgeTitle darktext">
                <h2>Lucy Bourne</h2>
              </div>
              <img class="judgePicture" src="../assets/judges/lucy.png" />
              <div
                class="judgeDescription darktext"
              >Microsoft Business Applications Evangelist on a mission to empower every person and organisation on the planet to achieve more.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row thePriceToPay">
      <div class="container-fluid">
        <div class="container thePriceToPayContent">
          <div class="thePriceToPayTitle">
            <h1>THE PRICE TO PAY</h1>
          </div>
          <p>Price: NOK 10000 (ex. VAT)</p>
          <p>Includes:</p>
          <ul>
            <li>
              <p>Challenge Participants Pass</p>
            </li>
            <li>
              <p>Three nights in single bedroom at onsite hotel</p>
            </li>
            <li>
              <p>Breakfast Friday, Saturday and Sunday</p>
            </li>
            <li>
              <p>Lunch, coffee and small treats for the full duration</p>
            </li>
            <li>
              <p>Geekfood Thursday</p>
            </li>
            <li>
              <p>Three course dinner Friday</p>
            </li>
            <li>
              <p>Banquet dinner Saturday</p>
            </li>
            <li>
              <p>Subsidized CloudPints</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row theCampSite">
      <div class="container">
        <div class="antlersStraightWhite"></div>
        <div class="antlersDividerWhite"></div>
        <div class="antlersDividerWhite"></div>
        <div class="theCampsiteTitle">
          <h1>THE CAMPSITE</h1>
        </div>
        <div class="antlersDividerWhite"></div>
        <div class="antlersDividerWhite"></div>
        <div class="antlersScewedWhite"></div>
        <div class="theCampSiteContent">
          <div class="theCampsiteSubTitle">
            <h1>VOKSENÅSEN HOTELL</h1>
          </div>
          <p>Venue is the venerable Voksenåsen Hotel, located in the hills surrounding Oslo.</p>
          <p>We encourage all participants to stay at the hotel for the event.</p>
          <p>We will handle room bookings, and as you see from the conference fee most of what you'll need is covered so you can focus on waging the ultimate cloud battle.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    track() {
      this.$ga.page("/");
    },
  }, //this is the name of the component
};
</script>
<style>
.main-section-top {
  max-width: 678px;
  margin: auto;
}
.legoLeft {
  position: absolute;
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
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6pt;
  padding: 1em;
  border: white 3pt solid;
  font-family: "Open Sans";
  font-weight: bold;
  margin-top: 3em;
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
  background-image: linear-gradient(to right, black, rgb(73, 71, 67));
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.quickSummary .container {
  padding-top: 2em;
}
.quickSummary .event-title {
  font-size: 55px;
  font-weight: 500;
  line-height: 1.2;
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
  width: 100%;
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
  color: black;
  font-weight: 900;
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
.Categories {
  background: lightgray;
  background: url(../assets/images/background-legos.svg) no-repeat center;
  height: 30%;
  padding-top: 15vh;
  flex-direction: column;
}
.theAward {
  background: white;
  height: 30%;
  padding-top: 15vh;
  margin-bottom: 15vh;
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
.theAwardTitle {
  color: #27343c;
  font-size: 72pt;
  text-align: left;
  font-weight: bold;
}
.theAwardContent {
  margin-top: 2vh;
  color: #6d7c90;
  font-size: 15pt;
  margin-bottom: 80px;
  text-align: left;
}
.theAwardContent p {
  margin: 0;
}
.categoriesHeader {
  display: flex;
  width: 60%;
  margin: auto;
}
.categoriesHeader h1 {
  color: black;
  text-align: left;
  font-size: 50pt;
  font-weight: bold;
}
.categoriesHeader p {
  color: #6d7c90;
  text-align: left;
  font-size: 15pt;
}
.categoryIcon {
  margin-right: 2em;
}
.categoriesTitle {
  display: flex;
  flex-direction: column;
}
.categoriesContent {
  color: black;
  font-size: 25px;
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
.categoryTitle {
  font-size: 35pt;
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
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: "Roboto Condensed", Georgia, Times, serif;
}
.thePriceToPay {
  background: white;
  /*background: url("../assets/images/artem-maltsev-1372852-unsplash.png")
    no-repeat center;*/
  background-size: cover;
}
.thePriceToPayTitle {
  color: white;
  font-size: 61px;
}
.thePriceToPayContent > ul > li {
  text-align: left;
}

.thePriceToPayContent {
  color: white;
  font-size: 25px;
  font-family: "Open Sans", Georgia, Times, serif;
  text-shadow: 1px 1px #27343c;
  margin-right: 2em;
}
.judges {
  background: #27343c;
  /*background: url("../assets/images/ella-peebles-kUkqoqwY61s-unsplash.jpg")
    no-repeat center;*/
  background-size: cover;
  opacity: 0.9;
  color: #27343c;
}
.judgesTitle {
  color: #fbb90f !important;
  font-size: 70px;
  font-weight: bolder;
  text-shadow: 1px 1px #27343c;
  margin-bottom: 30px;
}
.judgesContent {
  color: white;
  font-size: 25px;
  margin-top: 10%;
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
.judgeTitle {
  color: #fbb90f !important;
  font-size: 35px;
  text-shadow: 1px 1px #27343c;
  margin-bottom: 15px;
}
.judgePicture {
  margin-bottom: 15px;
  width: 315px;
  height: 315px;
}
.darktext {
  color: #fff;
  text-shadow: 3px 3px #27343c;
}
.bottomspacing {
  margin-bottom: 3em;
}
.judgeDescription {
  color: white;
  font-size: 25px;
  text-shadow: 3px 3px #27343c;
  margin-bottom: 25px;
}
.theCampSite {
  background: white;
  background: url("../assets/images/jake-hinds-392693-unsplash.png") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
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
  font-size: 25px;
  text-align: left;
  text-shadow: 1px 1px #27343c;
}
.theCampsiteSubTitle {
  color: white;
  font-size: 30px;
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
  top: 61vh;
}

.legoredleft {
  overflow-x: hidden;
  position: absolute;
  left: 25%;
  top: 70vh;
}

.legoblue {
  overflow-x: hidden;
  position: absolute;
  left: 65vw;
  top: 75vh;
}

.legoredright {
  overflow-x: hidden;
  position: absolute;
  left: 88vw;
  top: 81vh;
}

.separator {
  height: 10vh;
}

.line-style {
  height: 10%;
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
  }
  .brikk {
    max-width: 35vw;
  }
  .legoredleft {
    position: absolute;
    left: 0;
    top: 80vh;
  }
  .legoyellow {
    position: absolute;
    right: 0;
    top: 75vh;
  }
  .legoblue {
    position: absolute;
    left: 60vw;
    top: 87vh;
  }
  .legoredright {
    display: none;
  }
  .categoriesHeader {
    width: 90%;
  }
  .categoriesContent {
    background-color: transparent;
  }
  .categoryIcon {
    margin-right: 1em;
  }
  .categoriesTitle h1 {
    font-size: 35pt;
  }
  .categoriesTitle p {
    font-size: 12pt;
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
  .logo2right {
    position: unset;
  }
}
</style>