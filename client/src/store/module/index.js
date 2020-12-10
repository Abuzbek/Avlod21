export default {
  actions: {
    fetchCard ({ commit }) {
      const card = {
        cardOne : [
          {
            _id: '12322342112',
            heading:'01',
            title:'Biznesni tizimlashtirish',
            text1:'- Asosiy vazifa noaniqlikni kamaytirish va shu sababli xatarlarni minimallashtirish'
          },
          {
            _id: '1sdada23434',
            heading:'02',
            title:'Sotuvni boshqarish',
            text1:`- Sotuvchilarni ko'pchilik xodimlarga nisbatan boshqarish qiyinroq. Qiyin, ammo imkonsiz emas. Sotishning samarali boshqaruvi boshqa bo'limlarda boshqaruvdan biroz boshqacha yondashuvni talab qiladi. Sotish texnikasining o'z qoidalari mavjud. Ushbu qoidalarga amal qilinsa sotuv jarayonida muammo bo'lmaydi.`
          },
          {
            _id: '12234232112',
            heading:'03',
            title:'HR',
            text1:`- HR menejeri-kompaniyaning kadrlar bo'limini boshqaradigan shaxs.`
          }
        ],
        cardTwo :[
          {
            heading:'04',
            _id: '324sdf4245',
            title:"Biznes asoslarini o'rganish",
            text1:` - Yakka tartibdagi tadbirkor har doim ham o'z biznesini daromad keltiradigan tarzda qurishga qodir emas. Ba'zida yakka tartibdagi tadbirkorlarning ommaviy tugatilishining sababi tadbirkorlikning ushbu sohasini nazorat qiluvchi qonunlarning o'zgarishi hisoblanadi.`
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