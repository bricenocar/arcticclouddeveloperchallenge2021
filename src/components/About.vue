<template>
    <div class="container-fluid">
      <div class="row about">
        <div class="container">
          <div class="col-md-12">
            <h1>Arctic cloud developer challenge</h1>
             <div class="row legodivider">
              <img class="legodividerimg3" src="../assets/images/legoline.svg" />
            </div>
            <!-- <p>#acdc2021 aims to stimulate collaborative learning, networking and stimulation of ideas for participants through
              <nobr>hands-on,</nobr>
              <nobr>time-limited</nobr> challenges. we are fiercely competitive, yet vastly helpful and extremely sharing (also across teams), realizing that collective learning is more important than personal gain!
            </p>  -->
            <div class="row devider">
              <div class="col-md-12">
            <p>
              ACDC is a 3 day Norwegian hackathon focusing on Microsoft technology, such as Microsoft 365, SharePoint, Dynamics 365, IOT. Azure, ML, Power BI. <br>Our goal is to push technology to new limits while we learn from each other and socialize.
              This great event has been hosted for over 10 years at the beautiful Voksenåsen. This year we are forced to think new, so we are going online, and going LIVE!
            </p>
            </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'overview' }" class="io-about-reset">
                <div class="about-icon-link__link-icon">
                  <i class="ms-Icon ms-Icon--TextDocument" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    About ACDC
                  </h2>
                  <p class="about-icon-link__description">
                    The arctic cloud developer challenge was former known as the arctic sharepoint challenge. Read more...
                  </p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'business' }" class="io-about-reset">
                <div class="about-icon-link__link-icon">
                  <i class="ms-Icon ms-Icon--Certificate" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    The business challenge
                  </h2>
                  <p class="about-icon-link__description">
                    The business challenges that the teams choose to target are up to the teams. this year’s theme is Vikings, so feel free to center your business case in anything Midgard related, your imagination is the limit!
                  </p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'previous' }" class="io-about-reset">
                <div class="about-icon-link__link-icon ">
                  <i class="ms-Icon ms-Icon--BarChartVertical" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    Previous events
                  </h2>
                  <p class="about-icon-link__description">
                    ACDC have had very nice moments and stories, we are very happy to share them with you....
                  </p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'jury' }" class="io-about-reset">
                <div class="about-icon-link__link-icon">
                  <i class="ms-Icon ms-Icon--Teamwork" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    Jury and award process
                  </h2>
                  <p class="about-icon-link__description">
                    The jury this year consists of 5 people. The jury does not participate in teams, but are allowed to jump in on any team and aid/assist.
                  </p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'participants' }" class="io-about-reset">
                <div class="about-icon-link__link-icon">
                  <i class="ms-Icon ms-Icon--PlannerLogo" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    The participants
                  </h2>
                  <p class="about-icon-link__description">
                    The challenge is taken on by teams. The cloud is a collaborative platform and so should the development be. Teams are a minimum of two participants
                  </p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="column col-md-4">    
            <div class="about-icon-link about-v-default ">
              <router-link :to="{ name: 'valueswins' }" class="io-about-reset">
                <div class="about-icon-link__link-icon">
                  <i class="ms-Icon ms-Icon--Trophy2" aria-hidden="true"></i>
                </div>
                <div class="about-icon-link__link-text">
                  <h2 class="about-icon-link__heading yellowtitle">
                    Values and wins
                  </h2>
                  <p class="about-icon-link__description">
                    To ensure that all events follow our values, the core team provides benevolent dictatorship for all events.
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  name: "about", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>

.about .title {
  margin-top: 20px;
}
.about h1{
  color: black;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}

.about p{
  color: #6d7c90;
  text-align: left;
  font-size: 12pt;
}

.about ul {
  list-style-type: none;
}
.title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;    
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}

.about-icon-link a {
    display: flex;
    flex-direction: row;
}

.about-icon-link__link-icon>* {
    margin: 0 15px 0 0;
}

.about-icon-link__description{
  font-size: 20px;
}

.ms-Icon {
  line-height: 1;
  font-size: 32px;
  font-style: normal;
  color: inherit;
}

.io-about-reset {
    font-size: 100%;
    font-weight: 300;
    color: white;
}

a.io-about-reset:hover {
  color:cadetblue;
  text-decoration: none;
}

.columns.is-multiline, .is-multiline.ok-columns {
    flex-wrap: wrap;
}

.columns {
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -15px;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
   about h1{
    font-size: 30pt;
  }
}
/* ----------- iPhone X ----------- */
/* Portrait and Landscape */
@media only screen and (min-device-width: 180px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  about h1{
    font-size: 20pt;
  }
}
</style>