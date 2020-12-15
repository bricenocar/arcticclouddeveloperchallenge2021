<template>
    <div class="container-fluid jury2021">
      <div class="row judges">
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
                    src="../assets/judges/judge_merethe_square.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>Merethe Stave</h2>
                </div>
                <div class="judgeDescription">
                  <p>Merethe Stave is Chief Customer Officer and Senior Cloud Architect at CloudWay. She was recognized as one of Norway's 50 leading women in tech 2020 and is board member of the Norwegian Microsoft 365 Community.</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/judge_marius_square.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>Marius Agur</h2>
                </div>
                <div class="judgeDescription">
                  <p>Owner at Marius Agur Consulting and a Microsoft MVP in Business Applications. This CRMViking has both been a participant and judge before, so he knows what’s going on – most importantly, he can explain the points system.</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/judge_mikael.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>Mikael Svenson</h2>
                </div>
                <div class="judgeDescription">
                  <p>Principal Program Manager at Microsoft. Mikael has good insight in many technologies and platforms as well as experience as project manager and customer communicator.</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/judge_questionmark_square.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Creative engineer with excellent communication skills</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/judge_questionmark_square.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Creative engineer with excellent communication skills</p>
                </div>
              </div>
            </div>
            <div class="judgeCard col-md-4">
              <div class="judgeContent">
                <div class="judgePicture">
                  <img
                    class="judgePictureImg"
                    src="../assets/judges/judge_questionmark_square.png"
                  />
                </div>
                <div class="judgeTitle">
                  <h2>TBA</h2>
                </div>
                <div class="judgeDescription">
                  <p>Creative engineer with excellent communication skills</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row separator"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "jury", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
.judges {
  background: #2a2d35;
}
.judgesTitle {
  margin-top: 30px;
}
.judgesTitle h1 {
  color: white;
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 30px;
}
.judgesContent {
  color: white;
  font-size: 25px;
  margin-top: 5%;
  width: 80%;
  margin: auto;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>