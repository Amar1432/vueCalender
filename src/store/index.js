import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      userData: {},
      isLoggedIn: false,
      showModal: false
    }
  },
  mutations: {
    setUserData (state,data) {
      state.userData = data
    },
    setLogin(state,data) {
      state.isLoggedIn = data
    },
    setLoginModal(state,data) {
      state.showModal = data
    },
  },

})

export default store