export default {
  actions: {
    fetchCard ({ commit }) {
      const card = {
        cardOne : [
          {
            _id: '12322342112',
            heading:'01',
            title:'Marketing',
            text1:'- Lorem ipsum dolor sit amet',
            text2:'- Lorem ipsum dolor sit amet',
            text3:'- Lorem ipsum dolor sit amet',
            text4:'- Lorem ipsum dolor sit amet'
          },
          {
            _id: '1sdada23434',
            heading:'02',
            title:'Marketing',
            text1:'- Lorem ipsum dolor sit amet',
            text2:'- Lorem ipsum dolor sit amet',
            text3:'- Lorem ipsum dolor sit amet',
            text4:'- Lorem ipsum dolor sit amet'
          },
          {
            _id: '12234232112',
            heading:'03',
            title:'Marketing',
            text1:'- Lorem ipsum dolor sit amet',
            text2:'- Lorem ipsum dolor sit amet',
            text3:'- Lorem ipsum dolor sit amet',
            text4:'- Lorem ipsum dolor sit amet'
          }
        ],
        cardTwo :[
          {
            heading:'04',
            _id: '324sdf4245',
            title:'Marketing',
            text1:'- Lorem ipsum dolor sit amet',
            text2:'- Lorem ipsum dolor sit amet',
            text3:'- Lorem ipsum dolor sit amet',
            text4:'- Lorem ipsum dolor sit amet'
          },
          {
            heading:'05',
            _id: '324sdfw54',
            title:'Marketing',
            text1:'- Lorem ipsum dolor sit amet',
            text2:'- Lorem ipsum dolor sit amet',
            text3:'- Lorem ipsum dolor sit amet',
            text4:'- Lorem ipsum dolor sit amet'
          }
        ]
      }
      commit('cardOne', card.cardOne)
      commit('cardTwo', card.cardTwo)
    }
  },
  mutations: {
    cardOne (state, posts) {
      state.cardOne = posts
    },
    cardTwo (state, posts) {
      state.cardTwo = posts
    }
  },
  state: {
    cardOne: [],
    cardTwo:[]
  },
  getters: {
    cardOne (state) {
      return state.cardOne
    },
    cardTwo (state) {
      return state.cardTwo
    },
  }
}