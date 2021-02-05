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
    <div class="cursor-pointer" @click="$emit('show-modal')" v-if="!isLoggedIn">
      Login
    </div>
    <div class="cursor-pointer" @click="logout" v-else>
      Logout
    </div>
  </nav>
</template>

<script>
import { ref } from "vue"
import auth from "../services/auth/auth.js"
export default {
  props: ["isLoggedIn"],
  emits: ["show-modal"],
  setup() {
    const { signOut } = auth()
    const pageList = ref([
      { name: "HomePage", title: "Home" },
      { name: "Calender", title: "Calender" },
      { name: "MarkDown", title: "MarkDown" },
      { name: "Slider", title: "Slider" },
      { name: "Calculator", title: "Calculator" },
      { name: "Chat", title: "Chat" },
      // { name: "Example", title: "Example" },
    ])
    const logout = async () => {
      try {
        await signOut()
      } catch (error) {
        console.log(error)
      }
    }
    return { pageList, logout }
  }
}
</script>
