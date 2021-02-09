import { computed } from "vue"

export default function(next, store) {
  const isLoggedIn = computed(() => store.state.isLoggedIn)
  if (!isLoggedIn.value) {
    next("/")
    store.commit("setLoginModal", true)
  } else {
    next()
  }
  // console.log('from middleware');
}
