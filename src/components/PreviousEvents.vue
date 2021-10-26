<template>
  <div class="container-fluid overview-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title">Previous Events</h1>
          <p>
            This great event has been hosted for over 10 years at the beautiful
            Voksenåsen.
            <br />
            Here you can see highlights for earlier events.
          </p>
          <h4>Comments from the jugdes:</h4>
          <div class="center">
            <div class="col-md-3">
              <Tweet
                id="1235918009233010688"
                cards="visible"
                conversation="all"
                lang="en"
                theme="light"
                align="left"
                :width="200"
                :dnt="false"
                @tweet-load-error="onTweetLoadError"
                @tweet-load-success="onTweetLoadSuccess"
                ><template v-slot:loading>
                  <span>Loading...</span>
                </template>

                <template v-slot:error>
                  <span>Sorry, that tweet doesn’t exist!</span>
                </template>
              </Tweet>
            </div>
            <div class="col-md-3"><Tweet id="1226518271161184257" /></div>
            <div class="col-md-3"><Tweet id="1226558090130198529" /></div>
            <div class="col-md-3"><Tweet id="1102039120543731712" /></div>
            <div class="col-md-3"><Tweet id="1101061008125239301" /></div>
            <div class="col-md-3"><Tweet id="1102146784934141952" /></div>
            <div class="col-md-3"><Tweet id="962750232995024897" /></div>
            <div class="col-md-3"><Tweet id="828378154741923841" /></div>
            <div class="col-md-3"><Tweet id="819226186123505664" /></div>
          </div>
          <div id="app">
            <img
              class="image"
              v-for="(image, i) in images"
              :src="image"
              :key="i"
              @click="index = i"
            />
            <vue-gallery-slideshow
              :images="images"
              :index="index"
              @close="index = null"
            ></vue-gallery-slideshow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tweet } from "vue-tweet-embed";

export default {
  name: "previous", //this is the name of the component
  components: {
    Tweet: Tweet,
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.twitter-tweet {
  margin-right: 20px;
}
.center {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 20px;
}
.overview h1 {
  color: black;
  text-align: center;
  font-size: 50pt;
  font-weight: bold;
}
/* .overview h4{
  color: #6d7c90;
  font-size:30pt;
  font-weight:bold;
  text-align: center;
} */
.overview p {
  color: #6d7c90;
  font-size: 15pt;
  text-align: center;
}
.about ul {
  list-style-type: none;
}
.column {
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
/*.twitter-tweet twitter-tweet-rendered{
  width:100% !important;
}*/
</style>