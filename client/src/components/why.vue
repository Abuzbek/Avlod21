<template>
 <section>
   <div class="btn_glass">
     <div class="btn_outline">
     <div @click="hide = !hide" class="btn_outline-gray">
       <div class="btn_outline-white">
         <svg width="47" height="52" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.1361 29.9975L7.16427 51.1722C4.02663 52.9674 0 50.7937 0 47.1747V4.82532C0 1.21209 4.02082 -0.967325 7.16427 0.833557L44.1361 22.0083C44.8498 22.4104 45.4431 22.9918 45.8558 23.6933C46.2684 24.3949 46.4858 25.1917 46.4858 26.0029C46.4858 26.8141 46.2684 27.6109 45.8558 28.3125C45.4431 29.014 44.8498 29.5953 44.1361 29.9975Z" fill="#0561A6"/>
        </svg>
       </div>
     </div>
     </div>
   </div>
   <div v-show="hide" class="video">
     <iframe src="https://player.vimeo.com/video/489291445" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
     <div @click="hide = !hide" class="video_box">x</div>
   </div>
   <!-- </div v-show="hide">Hello</div> -->
   <img src="../assets/video.jpg" alt="">
 </section>
</template>

<script>
export default {
  name: 'Why',
  props: {
  },
  data(){
    return{
      hide: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(to left, rgba(5, 97, 166, 0.6) 0%, rgba(196, 196, 196, 0.5) 100%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video_box{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 5%;
  background:rgba(5, 97, 166) ;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
}
section{
  height: auto;
  background: #0163A6;
  position: relative;
}
section img{
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
}
.btn_glass{
  width:400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: radial-gradient(50% 50% at 50% 50%, rgba(5, 97, 166, 0.6) 0%, rgba(196, 196, 196, 0.5) 100%);
  z-index: 2;
  border-radius: 50%;
    display: flex;
  justify-content: center;
  align-items: center;
}
.btn_outline:hover .btn_outline-white{
  width: 170px;
  height: 170px;
}
.btn_outline:hover svg{
  transform: scale(1.2);
}
.btn_outline svg{
  transition-delay: 0.3s;
  transition-duration: .5s;
}
.btn_outline{
  width:210px;
  height: 210px;
  border-radius: 50%;
  z-index: 2;
  border: 3px solid #EBEFEE;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.btn_outline-gray{
  width: 170px;
  height: 170px;
  background: #EBEFEE;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_outline-white{
  width: 130px;
  height: 130px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.4s all;
}
h3{
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 50px;
}
@media (max-width: 991px) {
  .btn_glass{
    width:200px;
    height: 200px;
  }
  .btn_outline{
    width:150px;
    height: 150px;
  }
  .btn_outline-gray{
  width: 110px;
  height: 110px;
}
.btn_outline-white{
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.4s all;
}
.btn_outline svg{
  transform: scale(.7);
}
.btn_outline:hover svg{
  transform: scale(.9);
}
.btn_outline:hover .btn_outline-white{
  width: 110px;
  height: 110px;
}
}
@media (max-width: 767px) {
  .btn_glass{
    width:200px;
    height: 200px;
  }
  .btn_outline{
    width:150px;
    height: 150px;
  }
  .btn_outline-gray{
  width: 110px;
  height: 110px;
}
.btn_outline-white{
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.4s all;
}
.btn_outline svg{
  transform: scale(.7);
}
.btn_outline:hover svg{
  transform: scale(.9);
}
.btn_outline:hover .btn_outline-white{
  width: 110px;
  height: 110px;
}
}
@media (max-width: 767px) {
  .btn_glass{
    background: transparent;
    width: auto;
    height: auto;
  }
  .btn_outline{
    background: transparent;
    width: auto;
    height: auto;
    border: none;
  }

}
</style>
