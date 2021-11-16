<template>
    <div class="container-fluid overview-header">
      <div class="container">
        <div class="row">
          <div class="column">
            <h1 class="title">Arctic Cloud Developer Challenge</h1>
            <div class="overview">
            <h4>The event</h4>
            <p>
              ACDC stands for Arctic Cloud Developer Challenge. It is a hackathon that happens every year at Voksenåsen hotel. 
              It's 3 days of hackathon + 1 day hangover. The event was created as a social happening by and for the community as a place where like-minded IT professionals can engage in friendly competition without worrying about the mercantile challenges. 
              You will rather be rewarded for helping others and sharing experiences and know-how. 
              <br /><br />
              Be prepared, though! The competitive spirit will run high for you and the other participants. 
              As soon as the points start ticking in, you'll know the competition is on! The old boys will get busy badge-hunting from the get-go, and develop their solutions to "snipe" the most badges. 
            </p>
            <br />
            <h4>The task</h4>
            <p>
              The event is about building solutions that will solve a fictive need inspired by this year's theme. 
              You and your team will have to figure out for yourselves what you want to create and what business needs your solution will solve. 
              This way you get to choose what you want to build and what tools to use. It's important to be clear on what categories and badges you are targeting and working towards. 
              The categories are pretty much the same each year (Excellent User Experience, Most extreme Business Value, Rock Solid Geekness, Killer App). 
              The badges vary from year to year and follow the trends and changes in technology. 
            </p>
            <br />
            <h4>Rules</h4>
            <p>
              You compete by getting the most badges. Every team can get all badges, and they must be claimed by writing blog posts where you explicitly write what badge you are going for. 
              Most badges are about implementing a solution using a particular kind of technology or framework. 
              There are additional badges that can be won by showing good team spirit, lightning talks and doing stupid things for fun. 
              There's room for interpretation and it's important to talk to the judges and know that you'll get points for and not. 

              <br /><br />
              The five judges will give points for what they see during the event and judge all the teams by each category. 
              If they feel you got a great idea they will give you points in the "Great business value" category. 
              If you think about the usability, look and feel you will be given points in the "Excellent User Experience" category, etc. 
              Every day each judge can give each team point in each category. 
              Every day they award a team "Category King" for each category, so it's important to communicate, write blog posts and demonstrate your solution to the judges throughout the competition.
            </p>
            <br />
            <h4>What happens on the first day? </h4>
            <p>
              The first day will feel like a kick-start for newcomers. Many teams have participated for many years and know exactly what to do and how to get started. 
              The first badge you go for is "Early Delivery"; this badge is about presenting what your team have planned to create with sketches. 
              A good tip is to go for the "Show and tell" badge at the same time by writing a good description and presenting the solution well. 
            </p>
            <br />
            <h4>Agenda</h4>
            <p>
              Usually the event run like this:
            </p>
           
          </div>
          <div class="row devider aboutACDC">
          <div class="col-md-3">
              <p>
               <strong>Thursday</strong><br/>
              0800 Check-in and rigging<br/>
              0900 Welcome and Keynote<br/>
              1000 Teams presentation<br/>
              1030 Challenge kick-off<br/>
              1200 Lunch<br/>
              1245 Secret session<br/>
              1600 Jury Duty and snacks<br/>
              1900 Points and Crowns<br/>
              1930 Dinner and SharePint
              </p>
           </div>
           <div class="col-md-3">
             <p>
              <strong>Friday</strong><br/>
              0800 Breakfast<br/>
              0900 Challenge session<br/>
              1200 Lunch<br/>
              1245 Secret session<br/>
              1430 Challenge session<br/>
              1600 Jury Duty and snacks<br/>
              1900 Points and Crowns<br/>
              1930 Dinner and SharePint<br/>
              2030 Kahoot</p>
           </div>
           <div class="col-md-3">
             <p>
              <strong>Saturday</strong><br/>
              0800 Breakfast<br/>
              0900 Challenge session<br/>
              1200 Lunch<br/>
              1600 Jury Delivery<br/>
               Clean out the room!<br/>
              1700 Free time<br/>
              1900 Meetup at the bar<br/>
              1930 Challenge fine dinner<br/>
              2100 Demos and Awards<br/>
              2230 ACDC party</p>
           </div>
              <div class="col-md-3">
                <p>
               <strong>Sunday</strong><br/>
              0800 Breakfast<br/>
              1100 Latest checkout<br/>
            </p>              
              </div>
          </div>
          </div>
        </div>
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

.aboutACDC p {
  padding-left:20px
}
.about ul {
  list-style-type: none;
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