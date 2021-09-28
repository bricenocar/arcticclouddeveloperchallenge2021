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
          <p><b>Bronze</b></p>
          <p>SharePint thursday, 10.000,-</p>
          <p>GeekBeer friday, 10.000,-</p>
          <p><b>Silver</b></p>
          <p>Dinner thursday, 20.000,-</p>
          <p>Dinner friday, 20.000,-</p>
          <p><b>Gold</b></p>
          <p>Activity saturday, 30.000,-</p>
          <p>Dinner saturday, 30.000,-</p>

          <br />
          <p><b>Included in Bronze</b></p>
          <p>
            Flags, labels on bottles or similar on food/beer<br />
            Logo on web and SOME
          </p>
          <br />
          <p><b>Included in Silver</b></p>
          <p>
            Flags, labels on bottles or similar on food/beer<br />
            1 people can attend the dinner on the last day with presentations of
            solutions.<br />
            We present food/beer/activity as sponsored by the company<br />
            Logo on slides in general and mentioned at the beginning<br />
            Logo on web and SOME
          </p>
          <br />
          <p><b>Included in Gold</b></p>
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
  /* background: url(../assets/images/background-legos.svg) no-repeat center; */
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}
.sponsorship .title {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
  color: #000;
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