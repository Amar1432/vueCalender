<template>
  <div class="text-center mt-6"> 
      <h1 class="text-4xl py-5">This is homepage</h1>
      <div v-if="user">
        <h1>Welcome {{user.email}}</h1>
      </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import auth from '../services/auth/auth.js'
import { useStore } from 'vuex'
export default {
  name: 'HomePage',
  setup() {
    const store = useStore()
    const {authState} = auth()
    onMounted(()=> {
      authState()
    })
    const user = computed(()=> store.state.userData)
    return {user}
  }
}
</script>

