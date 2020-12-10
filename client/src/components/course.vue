<template>
  <section id="school">
    <h1>
      Biznes maktab kurslarimizda nimalarni o’rganasiz?
    </h1>
    <b-container>
        <b-row class="justify-content-center">
          <b-col v-for="(n, i) in cardOne" :name="i" :key="n._id"  cols="12" lg="4" md="6">
             <b-card class="avlod_card">
                  <h3>{{ n.heading }}</h3>
                  <h4>{{ n.title }}</h4>
                  <ul>
                    <li>{{ n.text1 }}</li>
                  </ul>
             </b-card>
          </b-col>
          <b-col cols="12" lg="8" class="m-auto">
            <b-row class="justify-content-center">
              <b-col v-for="(n, i) in cardTwo" :name="i" :key="n._id" cols="12" md="6" >
                <b-card class="avlod_card">
                  <h3>{{ n.heading }}</h3>
                  <h4>{{ n.title }}</h4>
                  <ul>
                    <li>{{ n.text1 }}</li>
                  </ul>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-center align-items-center w-100">
          <b-button v-ripple class="avlod_header_btn"><a href="https://t.me/avlod21_bot">Kursga yozilish</a></b-button>
        </div>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  props: {
  },
  data:()=>({
    // 
  }),
  computed : mapGetters(['cardOne','cardTwo']),
  mounted () {
    this.$store.dispatch('fetchCard')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  padding: 100px 0;
}
section h1{
  text-align:center;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 80px;
}
.avlod_card{
  border: 2px solid;
  border-image-source: linear-gradient(135deg, rgb(1, 99, 166), rgb(101, 149, 183));
  border-image-slice: 2;
  border-radius: 2px;
  margin-bottom: 55px;
  position: relative;
}
.avlod_card h3{
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  background: -webkit-linear-gradient(135deg, rgb(1, 99, 166), rgb(101, 149, 183));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  padding: 4px;
  top: -35px;
  z-index: 2;
}
.avlod_card::after{
  content: '';
  display: block;
  position: absolute;
  padding: 4px;
  top: -35px;
  z-index: 1;
    left: 18px;
  background: #fff;
  width: 60px;
  height: 64px;
}
.avlod_card .card-body{
  height: 190px;
  overflow: auto;
  margin-right: 10px;
}
.avlod_card .card-body:hover{
  margin-right: 0px;
}
.avlod_card .card-body::-webkit-scrollbar {
  width: 0px;
}
.avlod_card .card-body:hover::-webkit-scrollbar {
  width: 10px;
}
.avlod_card .card-body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.avlod_card .card-body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10em;
}
.avlod_card h4{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-align:center;
  margin-bottom: 20px;
  margin-top: 10px;
}
.avlod_card ul{
  padding: 0px !important;
  padding-left: 10px !important;
}
.avlod_card ul li {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: auto;
  color: #000000;
  list-style: none !important;
}
.avlod_header_btn{
  padding:21px 46px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  background: #0163A6;
  box-shadow: 0px 2px 4px 2px rgba(0, 69, 116, 0.5);
  border-radius: 2px;
  border: none !important;
}
.avlod_header_btn a{
  color: #fff;
  text-decoration: none !important;
}
.avlod_header_btn:focus{
  box-shadow: 0px 2px 4px 2px rgba(0, 69, 116, 0.5) !important;
}
.avlod_header_btn:active{
  background: #0163A6 !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}

</style>
