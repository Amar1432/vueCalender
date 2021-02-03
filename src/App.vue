<template>
  <AppHeader @showModal="viewModel = true" :isLoggedIn="isLoggedIn"></AppHeader>
  <router-view />
  <LoginModal @close-modal="viewModel = false" v-if="viewModel"></LoginModal>
</template>

<script>
import { onMounted, ref } from "vue"
import AppHeader from "./components/AppHeader.vue"
import LoginModal from "./components/LoginModal.vue"
import auth from "./services/auth/auth.js"
export default {
  setup() {
    const viewModel = ref(false)
    const { isLoggedIn, authState } = auth()
    onMounted(() => {
      authState()
    })
    return { viewModel, isLoggedIn }
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
  /* text-align: center; */
  color: #2c3e50;
}
</style>
