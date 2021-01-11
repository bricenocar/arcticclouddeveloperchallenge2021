<template>
    <div class="container-fluid ">
        <div class="row technical">
          <div class="container">
            <div class="col-md-12">
            <h1>Teknisk oppsett</h1>
            <div class="row legodivider">
              <img class="legodividerimg3" src="../assets/images/legoline.svg" />
            </div>
            </div>
            <br>
            <p><b>Hvor skal laget ditt være?</b></p>
            
            <p>Vi ønsker at alle lagene skal sitte samlet, enten om det er på kontoret i et stort møterom eller om det er på et hotell. 
                Grunnen til dette er at vi sender årets arrangement live på YouTube og dermed ønsker vi å vise laget samlet i en stream.  </p>

            <p><b>Utstyr</b></p>
            <p>Alle lag må ha med et eksternt web kamera, mikrofon og høytaler <br>
            Alle lag må ha en dedikert skjerm for skjermdeling til live stream.  </p>
            
            <p><b>Oppsett av møterom og PC </b></p>
            <p>Webkamera/mikrofon bør plasseres høyt, gjerne på stativ og skal filme hele laget samlet. Det må kobles til en deltaker PC som igjen blir med som gjest i StreamYard som vi bruker for å produsere live stream til YouTube.  Linken til StreamYard er <a href="https://streamyard.com/knxi5cms3w">https://streamyard.com/knxi5cms3w</a> og når man logger på så angi <b>lagnavn</b> i stedet for faktisk navn.
            </p>
            <p>Den samme PC'en med ekstern skjerm må dele skjerm til StreamYard. Dette for å vise andre lag og tilskuere hva som gjøres ved for eksempel dommerevaluering. Det kreves derfor at denne PC'en er logget på Teams som viser hva laget driver med via skjermdeling til StreamYard. </p>

            <p><b>VIKTIG </b></p>
            <p>Det er enklest å bruke en dedikert PC til alt dette så kamera og mikrofon ikke kommer i konflikt med Teams. For at lyd og bilde skal fungere i StreamYard kan ikke kamera og mikrofon brukes av Teams samtidig. </p>

            <p><b>Software </b></p>
            <p>Til selve gjennomføringen av arrangementet bruker vi Teams med ulike grupperom. Alle lag får hvert sitt rom, samt et eget rom for dommere. Det vil være anledning til å besøke hverandres rom under arrangementet og å gå opp i hovedmøte hvor representanter for komiteen sitter til enhver tid.  </p>

            <p><b>Agenda </b></p>
            <p>Det vil bli annonsert når man skal komme til hovedmøte, når det vil bli gjort dommerevaluering og andre hendelser i henhold til agenda.  </p>

            <p><b>YouTube live stream</b></p>
            <p><a href="https://www.youtube.com/watch?v=xvuzgS2DVNs">Arctic Cloud Developer Challenge 2021 - Online Edition - YouTube</a></p>
          </div>
          </div>     
    </div>
</template>

<script>
export default {
  name: "Technical", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>


.technical {
  padding: 20px;
  text-align: left;
   background: white;
   background: url(../assets/images/background-graa.svg) no-repeat center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}
/* .technical .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #000;
} */

.technical p {
  color: #000;
}
/* .column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
} */
.technical h1{
  color: black;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
}

.technical p{
  color: #6d7c90;
  text-align: left;
  font-size: 15pt;
}
.legodividerimg3 {
  width: 50%;
  margin: auto;
}
</style>