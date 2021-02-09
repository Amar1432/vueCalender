import { computed } from "vue"

export default function(next, store) {
  const isLoggedIn = computed(() => store.state.isLoggedIn)
  if (!isLoggedIn.value) {
    next("/")
    store.commit("setLoginModal", true)
  } else {
    store.commit("setLoginModal", true)
    next()
  }
}
