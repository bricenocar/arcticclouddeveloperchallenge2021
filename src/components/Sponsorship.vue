<template>
  <div class="container-fluid sponsorship">
    <div class="container">
      <div class="row">
        <!-- <h3 class="title">Sponsorship packages</h3> -->

        <div class="column overview">
          <h3 class="title">Dear sponsors</h3>
          <p>
            ACDC is the Nordic region's coolest hackathon with the best
            consultants. We gather once a year to show the world what we can do
            while learning from each other. The teams gather at the venerable
            Voksenåsen hotel for 3 days. Even though we compete against each
            other, the most important moment is the knowledge we share.
          </p>
          <p>
            Although ACDC is the most epic hackathon on earth, we depend on help
            to get the wheels running. We are a non-profit event where everyone
            works voluntarily to get this done.
          </p>
          <p>
            This year we have changed the sponsorship packages so that it is
            clear what you as a company sponsor. For each of the events that are
            sponsored, it will be possible to present merch that promotes the
            company.
          </p>
          <p>
            You can now sponsor in 3 different categories and choose which event
            you want to sponsor.
          </p>
          <br />
          <h4>Bronze</h4>
          <p>SharePint thursday, 10.000,-<br>
          GeekBeer friday, 10.000,-</p>
          <br/>
          <h4>Silver</h4>
          <p>Dinner thursday, 20.000,-<br>
          Dinner friday, 20.000,-</p>
          <br/>
          <h4>Gold</h4>
          <p>Activity saturday, 30.000,-<br>
          Dinner saturday, 30.000,-</p>

          <br />
          <h4>Included in Bronze</h4>
          <p>
            Flags, labels on bottles or similar on food/beer<br/>
            Logo on web and SOME
          </p>
          <br />
          <h4>Included in Silver</h4>
          <p>
            Flags, labels on bottles or similar on food/beer<br />
            1 people can attend the dinner on the last day with presentations of
            solutions.<br />
            We present food/beer/activity as sponsored by the company<br />
            Logo on slides in general and mentioned at the beginning<br />
            Logo on web and SOME
          </p>
          <br />
          <h4>Included in Gold</h4>
          <p>
            Flags, labels on bottles or similar on food/beer<br />
            Appeal, speech, PPT presentation or short video<br />
            2 people can attend the dinner on the last day with presentations of
            solutions.<br />
            We present food/beer/activity as sponsored by the company<br />
            Logo on slides in general and mentioned at the beginning<br />
            Logo on web and SOME
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsorship", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.sponsorship {
   padding: 20px;
  text-align: left;
  background: white;
  background: url("../assets/images/ninjaturtlebackground.jpeg") no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.sponsorship .title {
  margin-top: 20px;
  color: #adc002;
}
.sponsorship ul {
  list-style-type: none;
}
.sponsorship p {
  color: #000;
}
.column {
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>