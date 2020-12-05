<template>
  <section>
    <div class="avlod_header_overlay"></div>
    <b-container>
        <b-row>
          <b-col cols="12" lg="6">
            <div class="avlod_about_left">
              <b-img src="../assets/about.jpg" class="avlod_about_img" fluid alt="Responsive image"></b-img>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <div class="avlod_about_right">
              <h3>
                Avlod 21 - biznes akademiyasi 
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis
              </p>
            </div>
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
  padding: 180px 0;
}
.avlod_about_left{
  position:relative;
}
.avlod_about_left::after{
  content:'';
  display: block;
  position:absolute;
  width: 100%;
  height: 100%;
  bottom:-20px;
  left: -20px;
  border: 5px solid #C4C4C4;
  box-sizing: border-box;
  z-index: -1;
}
.avlod_about_right{
  padding: 30px 0;
  max-width: 445px;
}
.avlod_about_right h1{
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
.avlod_about_right p{
  margin-top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
@media (max-width:991px){
  .avlod_about_right{
    max-width: 100%;
  }
  .avlod_about_left img{
    width: 100%;
  }
  section{
    padding: 70px 0;
  }
}
@media (max-width:575px){
  .avlod_about_left::after{
    left: -2%;
    bottom: -4%;
    width: 104%;
    height: 108%;
  }
}
</style>
