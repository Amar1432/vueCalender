<template>
  <div
    class="z-20 w-full h-screen bg-gray-500 fixed top-0 opacity-50"
    @click="close"
  ></div>
  <div class="absolute inset-0">
    <div class="flex flex-wrap h-full">
      <div class="z-30 m-auto bg-white rounded-md p-2 shadow w-1/3">
        <h1 class="text-3xl text-center mt-4 font-bold text-green-500">
          Login
        </h1>
        <form @submit.prevent="handleSubmit" class="p-5">
          <div class="my-4">
            <label class="font-bold">Email or Username</label>
            <input
              type="text"
              class="rounded shadow w-full p-2 my-2"
              placeholder="enter your username or email"
              v-model="email"
            />
          </div>
          <div class="my-4">
            <label class="font-bold">Password</label>
            <input
              type="password"
              class="rounded shadow w-full p-2 my-2"
              placeholder="enter your password"
              v-model="password"
            />
          </div>
          <button
            class="border w-full shadow-md rounded px-4 py-2 text-center bg-green-500 text-white font-bold"
          >
            <span v-if="isLoggingIn">⏳</span><span v-else>Login</span>
          </button>
        </form>
        <p class="text-center p-5">Or</p>
        <div class="text-center">
          <GoogleLogin @close="close"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import auth from "../services/auth/auth.js"
import GoogleLogin from "../components/GoogleLogin.vue"
export default {
  components: {GoogleLogin},
  emits: ["close-modal"],
  setup(props, { emit }) {
    const email = ref("")
    const password = ref("")
    const { signIn, isLoggingIn } = auth()
    const handleSubmit = async () => {
      await signIn(email.value, password.value)
      close()
    }
    const close = () => {
      emit("close-modal")
    }
    return { email, password, handleSubmit, close, isLoggingIn }
  }
}
</script>
