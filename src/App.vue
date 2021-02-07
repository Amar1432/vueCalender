<template>
  <AppHeader />
  <router-view />
  <LoginModal />
</template>

<script>
import { onMounted } from "vue"
import AppHeader from "./components/AppHeader.vue"
import LoginModal from "./components/LoginModal.vue"
import auth from "./services/auth/auth.js"

export default {
  setup() {
    const { authState } = auth()
    onMounted(() => {
      authState()
    })
  },
  name: "App",
  components: {
    AppHeader,
    LoginModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
