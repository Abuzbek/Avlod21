<template>
  <section>
    <b-container fluid>
      <b-row>
         <b-col class="p-0" cols="12" lg="6">
           <b-card class="avlod_contact_card">
             <h3>Savollaringizga quyidagi forma  orqali tezkor javob oling!</h3>
             <b-form-input class="avlod_contact_input"  v-model="name" placeholder="Ismingiz"></b-form-input>
             <b-form-input class="avlod_contact_input" v-model="number" placeholder="Telefon"></b-form-input>
             <b-form-input class="avlod_contact_input text_area" v-model="quesion" placeholder="Savolingiz"></b-form-input>
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
  padding: 60px 160px;
  background: #003B63;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}
h3{
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
}
.avlod_contact_input{
  background: transparent;
  border-radius: 0px;
  border: none;
  border-bottom:1px solid white;
  margin-bottom: 40px;
  transition: 0.5s;
}
.avlod_contact_input:focus{
  box-shadow: none;
}
.avlod_contact_input.text_area:focus{
  padding-bottom: 80px;
}
.avlod_contact_input:focus::placeholder{
  color: #003B63;
}
.avlod_contact_input::placeholder{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  transition: .8s;
}
</style>
