<template>
 <section>
    <b-container>
      <h3>
        Nega Avlod21 ni tanlashingiz kerak?
      </h3>
      <div class="avlod_why_flex">
        <div class="avlod_why_box">
          Biznes yuritish sirlarini <br> batafsil o’rgatiladi
        </div>
        <div class="avlod_why_box">
          Biznes yuritish sirlarini <br> batafsil o’rgatiladi
        </div>
        <div class="avlod_why_box">
          Biznes yuritish sirlarini <br> batafsil o’rgatiladi
        </div>
        <div class="avlod_why_box">
          Biznes yuritish sirlarini <br> batafsil o’rgatiladi
        </div>
      </div>
      <div class="avlod_why_knop">
        <div class="avlod_why_btn">
        </div>
         <div class="avlod_why_btn">
        </div>
         <div class="avlod_why_btn">
        </div>
         <div class="avlod_why_btn">
        </div>
      </div>
    </b-container>
 </section>
</template>

<script>
export default {
  name: 'Why',
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
  padding: 100px 0 120px;
  background: #0163A6;
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
.avlod_why_flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avlod_why_box{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
}
.avlod_why_knop{
  width: 86%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  margin-top: 20px;
}
.avlod_why_btn{
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0163A6;
  z-index: 4;
}
.avlod_why_btn::after{
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  animation:strokeBtnAfter 3s linear infinite;
}
.avlod_why_btn::before{
  content: '';
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 50%;
  animation:strokeBtn 3s linear infinite;
}
.avlod_why_btn:first-child{
  margin-left: -6px;
}
.avlod_why_btn:last-child{
  margin-right: -18px;
}
.avlod_why_knop::after{
  content:'';
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background: #FFFFFF;
}
@keyframes strokeBtn {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
}
@keyframes strokeBtnAfter {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(0.7);
  }
  100%{
    transform: scale(1);
  }
}
</style>
