<template>
  <div>
    <div class="container-fluid">
      <div class="row chart">
        <div class="container">
          <div class="col-md-12">
            <h1>Scoreboard</h1>
            <div class="row legodivider">
              <img
                class="legodividerimg3"
                src="../assets/images/legoline.svg"
              />
            </div>
          </div>
          <div class="col-md-12">
            <!-- <div class="imgscoreboard">
            <img src="../assets/images/scoreboard1.jpg"/>
              
          </div> -->
<iframe width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiMWZhOGI2ZmYtYzYzMC00MTcwLTlkOWEtNmQ3NzdhM2VkMDQ2IiwidCI6IjMzM2RiM2Y5LTE0YmMtNDM4ZC05ODJmLTM3MzZiN2M4NTYzZSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Chart", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.chart {
  padding: 20px;
  text-align: left;
  background: #2a2d35;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.chart ul {
  list-style-type: none;
}
.chart .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  color: black;
}
.chart p {
  color: white;
}
.chart .card {
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
.chart h1 {
  color: white;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}

.chart h4 {
  color: white;
  font-size: 20pt;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
}
.chart .lightbrowntitle .title {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
.imgscoreboard img{
  width:1140px;
}
</style>