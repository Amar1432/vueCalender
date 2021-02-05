<template>
  <div class="text-center mt-6"> 
      <h1 class="text-4xl py-5">This is homepage</h1>
      <h1 v-if="user">Welcome {{user.email}}</h1>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import auth from '../services/auth/auth.js'
export default {
  name: 'HomePage',
  setup() {
    const {authState, user} = auth()
    onMounted(()=> {
      authState()
    })
    return {user}
  }
}
</script>

