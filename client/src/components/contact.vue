<template>
  <section>
    <b-container fluid>
      <b-row>
         <b-col class="p-0" cols="12" lg="6">
           
           <b-card class="avlod_contact_card">
             <div
             class="avlod-card_in"
             >
                <h3>Savollaringizga quyidagi forma  orqali tezkor javob oling!</h3>
              <b-form-input class="avlod_contact_input"  v-model="name" placeholder="Ismingiz"></b-form-input>
              <b-form-input class="avlod_contact_input" v-model="number" placeholder="Telefon"></b-form-input>
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="Savollaringiz"
                rows="3"
                class="avlod_contact_input text_area"
                no-resize
              ></b-form-textarea>
              <div class="d-flex justify-content-center align-items-center">
              <b-button v-ripple class="avlod_header_btn">Yuborish</b-button>
              </div>
             </div>
             <div class="avlod_contact_overlay"></div>
           </b-card>
        </b-col>
        <b-col class="p-0" cols="12" lg="6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11982.58843740213!2d69.2104013862915!3d41.33828640280658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b28c283edeb9cd4!2sAvlod21!5e0!3m2!1sru!2s!4v1607070478935!5m2!1sru!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </b-col>
      </b-row>
    </b-container> 
  </section>
</template>

<script>
export default {
  name: 'contact',
  props: {
  },
  data:()=>({
    name:null,
    number:null,
    quesion:null
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avlod_contact_card{
  padding: 60px 0;
  background: url('../assets/contact.jpg') fixed no-repeat center center / cover;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}
.avlod-card_in{
  max-width: 445px;
  margin: 0 auto;
}
.avlod_contact_overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 99, 166, 0.5);
  z-index: 1;
}
h3{
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  z-index: 2;
}
.avlod_contact_input{
  background: transparent;
  border-radius: 0px;
  border: none;
  border-bottom:1px solid white;
  margin-bottom: 40px;
  transition: 0.5s !important;
  color: white;
  font-size: 20px;
  word-wrap: break-word;
  position: relative;
  z-index: 2;
}
.avlod_contact_input:focus{
  box-shadow: none;
}
.avlod_contact_input.text_area{
  height: 44px;
  transition: 0.4s !important;
}
.avlod_contact_input.text_area::placeholder{
  transition: .1s;
}
.avlod_contact_input.text_area:focus{
  height: 80px;
}
.avlod_contact_input:focus::placeholder{
  color: #003b6300;
}
.avlod_contact_input::placeholder{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  transition: .4s;
}
.avlod_header_btn{
  padding:21px 46px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  background: #ffffff;
  border-radius: 2px;
  border: none !important;
  color: #003B63;
  position: relative;
  z-index: 2;
}
.avlod_header_btn:focus{
  box-shadow: 0px 2px 4px 2px rgba(255, 255, 255, 0) !important;
}
.avlod_header_btn:active{
  background: #ffffff !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
  color: #003B63 !important;
}
@media (max-width:991px) {
  iframe{
    height: 400px !important;
  }
}
</style>
