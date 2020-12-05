<template>
  <section>
    <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" lg="4" md="6">
             <b-card class="avlod_card">
               <img :src="require('../assets/comma.svg')" alt="">
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor sit amet, consectetur adipiscing
               </p>
               <h2>
                 Sardor Abduganiyev
               </h2>
             </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="6">
             <b-card class="avlod_card">
               <img :src="require('../assets/comma.svg')" alt="">
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor sit amet, consectetur adipiscing
               </p>
               <h2>
                 Sardor Abduganiyev
               </h2>
             </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="6">
             <b-card class="avlod_card">
               <img :src="require('../assets/comma.svg')" alt="">
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor sit amet, consectetur adipiscing
               </p>
               <h2>
                 Sardor Abduganiyev
               </h2>
             </b-card>
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
section{
  padding: 30px 0 140px 0;
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
