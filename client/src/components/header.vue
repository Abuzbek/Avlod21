<template>
  <header>
    <div class="avlod_header_overlay"></div>
    <b-container>
        <b-row>
          <b-col cols="12" lg="8">
            <div class="avlod_header_title">
              <h1 class="d_none_md"></h1>
              <h2 class="d_block_md"><span>Biznesingizni</span> biz bilan rivojlantiring</h2>
              <p>
                Kurslarimizda ta’lim oling va yetuk mutaxasis bo’ling!
              </p>
              <b-button v-ripple class="avlod_header_btn">Kursga yozilish</b-button>
            </div>
          </b-col>
        </b-row>
    </b-container>
  </header>
</template>

<script>
import Typed from 'typed.js'
export default {
  name: 'Header',
  props: {
  },
  data:()=>({
    // 
  }),
  mounted(){
    var typed = new Typed('.avlod_header_title h1', {
      strings: ['<span>Biznesingizni</span> biz <br> bilan rivojlantiring'],
      typeSpeed: 30,
      showCursor: false,
      backDelay: 700,
    });
    console.log(typed);
    setTimeout(()=>{
      document.querySelector('.avlod_header_title h1 span').style.color = "#0163A6"
    }, 2000)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background:url('../assets/header.jpg') no-repeat center center / cover;
  position:relative;
}
.avlod_header_title{
  padding-top:25vh;
  padding-bottom:25vh;
  position: relative;
  z-index: 2;
}
.avlod_header_overlay{
  position:absolute;
  top: 0;
  left:0;
  width: 100%;
  height:100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 38.02%, rgba(57, 137, 191, 0.40303) 69.79%, rgba(1, 99, 166, 0.4) 100%);
  z-index: 1;
}
.avlod_header_title h1{
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  height: 150px;
}
.avlod_header_title h2 span{
  color: #0163A6;
}
.avlod_header_title p{
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 50px;
  margin-top: 50px;

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

.avlod_header_btn:focus{
  box-shadow: 0px 2px 4px 2px rgba(0, 69, 116, 0.5) !important;
}
.avlod_header_btn:active{
  background: #0163A6 !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}
.d_block_md{
  display: none;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
}
@media (max-width:991px) {
  .avlod_header_title h1{
    height: auto;
  }
}
@media (max-width:767px) {
  .d_none_md{
    display: none;
  }
  .d_block_md{
    display: block;
    font-size: 50px;
  }
  .avlod_header_title p {
    margin-bottom: 25px;
    margin-top: 25px;
}
}
@media (max-width:575px) {
  header{
    text-align: center;
  }
  .d_block_md{
    display: block;
    font-size: 40px;
  }
  .avlod_header_title p{
    font-size: 20px;
  }
}
</style>
