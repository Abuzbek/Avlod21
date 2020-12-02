<template>
  <div id="app">
    <Navbar/>
    <Header/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Header from './components/header.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Header
  }
}
</script>

<style>
</style>
