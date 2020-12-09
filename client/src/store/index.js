import Vue from 'vue'
import Vuex from 'vuex'
import module from './module/index'

Vue.use(Vuex)
const abdumannon = (hello)=>{
  console.log(hello.name);
}
abdumannon({
  name: 'Abdumannon',
  sur: 'tojiboev'
})
export default new Vuex.Store({
  modules: {
    module
  }
})
