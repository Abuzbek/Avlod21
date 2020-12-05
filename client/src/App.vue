<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <About/>
    <Why/>
    <Course/>
    <Clients/>
    <Contact/>
  </div>
</template>
<script>
import Navbar from './components/navbar.vue'
import Header from './components/header.vue'
import About from './components/about.vue'
import Why from './components/why'
import Course from './components/course.vue'
import Clients from './components/clients.vue'
import Contact from './components/contact.vue'


export default {
  name: 'App',
  components:{
    Navbar,
    Header,
    About,
    Why,
    Course,
    Clients,
    Contact
  }
}
</script>

<style>
</style>
