<template>
  <div class="container-fluid jury2021">
    <div class="row judges">
      <div class="container">
        <div class="judgesTitle darktext">
          <h1>Judges</h1>
        </div>
        <div class="row legodivider">
          <img class="legodividerimg3" src="../assets/images/legoline.svg" />
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
                <p>
                  Merethe Stave is Chief Customer Officer and Senior Cloud
                  Architect at CloudWay. She is an Office Apps and Services MVP,
                  was recognized as one of Norway’s 50 leading women in tech
                  2020 and is a board member of the Norwegian Microsoft 365
                  Community. She has worked for more than 10 years with the
                  Office 365/SharePoint platform, and was behind the
                  establishment of the SharePoint Saturday Conference (SPS) in
                  Oslo early 2013.
                </p>
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
                <p>
                  Owner at Marius Agur Consulting and a Microsoft MVP in
                  Business Applications. This CRMViking has both been a
                  participant and judge before, so he knows what’s going on –
                  most importantly, he can explain the points system.
                </p>
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
                <p>
                  Mikael is a Principal Program Manager at Microsoft working on
                  Microsoft Search (with a license to develop 🙂) He was awarded
                  MVP in Office Apps & Services between 2011-2018 and has
                  authored three books on search. He is also a member of
                  Microsoft 365 Patterns and Practices (PnP). Closing on 50 he
                  claims to still be youthful and humble - statements we'll just
                  leave at that.
                </p>
              </div>
            </div>
          </div>
          <div class="judgeCard col-md-6">
            <div class="judgeContent">
              <div class="judgePicture">
                <img
                  class="judgePictureImg"
                  src="../assets/judges/judge_martin.png"
                />
              </div>
              <div class="judgeTitle">
                <h2>Martin Ehrnst</h2>
              </div>
              <div class="judgeDescription">
                <p>
                  Martin is a Microsoft Azure MVP, working in 'fintech' as a
                  technical lead for cloud platforms at Vipps. For more than a
                  decade he has worked with infrastructure management,
                  automation, and monitoring. Martin is dedicated on sharing his
                  findings, and does so via community contributions around the
                  new IT-Pro role, where code meets operations. You can read
                  more about his findings trough his blog, social media,
                  conferences, and user groups.
                </p>
              </div>
            </div>
          </div>
          <div class="judgeCard col-md-6">
            <div class="judgeContent">
              <div class="judgePicture">
                <img
                  class="judgePictureImg"
                  src="../assets/judges/judge_ida.png"
                />
              </div>
              <div class="judgeTitle">
                <h2>Ida Bergum</h2>
              </div>
              <div class="judgeDescription">
                <p>
                  Ida is a Data and AI Solution Architect in Avanade, and a Data
                  Platform MVP. Her passion is to help industries and people to
                  become more data driven and data literate. One of her favorite
                  platforms that she very often talks about on international
                  conferences, and a very important part of that passion or
                  mission of hers, is Power BI. She has been part of some cool
                  large international implementations and rollouts over the
                  years, both from a strategic and technical perspective. She is
                  also board member of local user groups like MDPUG Norway, and
                  PPUG. While she is missing her community in person events
                  these days, she are very much looking forward to meet you all
                  virtually in her first ACDC.
                </p>
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
    track() {
      this.$ga.page("/");
    },
  },
};
</script>
<style>
.column {
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>