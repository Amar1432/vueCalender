<template>
  <button
    class="border shadow-md rounded px-4 py-2 text-center bg-red-500 text-white font-bold mb-5"
    @click="googleLogin"
  >
    Login with Google
  </button>
</template>

<script>
import auth from "../services/auth/auth.js"
export default {
  emits: ["close"],
  setup(props, {emit}) {
    const { googleSignIn } = auth()
    const googleLogin = async () => {
      await googleSignIn()
      emit('close')
    }
    return {googleLogin}
  }
}
</script>
