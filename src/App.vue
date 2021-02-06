<template>
  <AppHeader/>
  <router-view />
  <LoginModal v-if="viewModel"></LoginModal>
</template>

<script>
import { computed, onMounted, ref } from "vue"
import AppHeader from "./components/AppHeader.vue"
import LoginModal from "./components/LoginModal.vue"
import auth from "./services/auth/auth.js"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const viewModel = computed(() => store.state.showModal)
    const { authState } = auth()
    onMounted(() => {
      authState()
    })
    return { viewModel,store }
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
