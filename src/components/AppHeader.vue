<template>
  <nav
    class="h-12 bg-blue-500 text-white font-bold py-2 text-lg flex justify-items-start px-4"
  >
    <router-link
      class="mr-2"
      v-for="page in pageList"
      :key="page"
      :to="{ name: page.name }"
      >{{ page.title }}</router-link
    >
    <div class="cursor-pointer" @click="store.commit('setLoginModal',true)" v-if="!isLoggedIn">
      Login
    </div>
    <div class="cursor-pointer" @click="logout" v-else>
      Logout
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue"
import auth from "../services/auth/auth.js"
import { useStore } from 'vuex'

export default {
  // props: ["isLoggedIn"],
  emits: ["show-modal"],
  setup() {
    const store = useStore()
    const { signOut } = auth()
    const pageList = ref([
      { name: "HomePage", title: "Home" },
      { name: "Calender", title: "Calender" },
      { name: "MarkDown", title: "MarkDown" },
      { name: "Slider", title: "Slider" },
      { name: "Calculator", title: "Calculator" },
      { name: "Chat", title: "Chat" },
      { name: "UserCrud", title: "UserCrud" },
      // { name: "Example", title: "Example" },
    ])
    const logout = async () => {
      try {
        await signOut()
      } catch (error) {
        console.log(error)
      }
    }
    const isLoggedIn = computed(()=>store.state.isLoggedIn) 
    return { pageList, logout, isLoggedIn,store }
  }
}
</script>
