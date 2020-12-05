<template>
  <div class="header">
    <div>
  <b-navbar class="avlod_navbar_fixed" toggleable="lg" type="light">
    <b-container>
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="avlod_navbar_title" v-for="n in navbarItem" :key="n.title" >{{ n.title }}</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <a href="tel:+" class="avlod_navbar_number"> +998 99 012 56 76</a>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data:()=>({
    navbarItem:[
      {
        title:'Biz haqimizda'
      },
      {
        title:'Biznes maktab'
      },
      {
        title:'Sharhlar'
      },
      {
        title:'Kontaktlar'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avlod_navbar_fixed{
  position:absolute;
  top: 0;
  left:0;
  width:100%;
  right: 0;
  z-index: 1000;
}
.avlod_navbar_number{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
.avlod_navbar_title{
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
</style>
