<template>
  <section id="meetup">
    <overlay></overlay>
    <b-container>
      <h1>Tadbirkorlar bilan suhbatlar</h1>
        <b-row class="justify-content-center">
          <b-col cols="12" lg="4" md="6">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/rMCyHmEsK5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-col>
          <b-col cols="12" lg="4" md="6">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/e8gFfMGh7s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-col>
          <b-col cols="12" lg="4" md="6">
             <iframe width="100%" height="300" src="https://www.youtube.com/embed/r8EyK13jQN0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-col>
        </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data:()=>({
    // 
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section h1{
  text-align:center;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 80px;
  position: relative;
z-index: 100;
}
section{
  position: relative;
  padding: 30px 0 140px 0;
  background: url('https://img.wallpapersafari.com/desktop/1920/1080/61/22/x17Gcy.png') no-repeat center center / cover;
  background-attachment: fixed;
}
section overlay{
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* backdrop-filter: blur(1px); */
  background-color: rgba(0, 62, 112, 0.3);
}
.avlod_card{
  border: none !important;
}
.avlod_card .card-body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.avlod_card h2{
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #000000;
}
.avlod_card p{
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
