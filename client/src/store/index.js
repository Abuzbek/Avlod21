import Vue from 'vue'
import Vuex from 'vuex'
import module from './module/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    module
  }
})
