<template>
    <div class="container-fluid">
      <div class="row contact">
        <div class="container">
          <div class="col-md-12">
            <h1 class="title">Previous Events</h1>            
          </div>
        </div>
      </div>
    </div>
</template>

<script>


export default {

  name: "previous", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>

.twitter-tweet {
  margin-right: 20px;
}
.center{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 20px;
}
.title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    color:black;
}
.overview h1{
  color:black;
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

.about .title {
  margin-top: 20px;
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