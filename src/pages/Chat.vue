<template>
  <div class="text-center">
    <AppTitleBar>Realtime Chat</AppTitleBar>
  </div>
  <section class="w-full h-screen flex">
    <div class="mx-auto">
      <div class="border rounded-lg px-2 py-4 shadow-md">
        <div class="h-80">
          <div v-if="userData">
            <div v-for="data in userData" :key="data">
              <h1
                class="p-2"
                :class="{ 'text-right': data.data().userId == uid }"
              >
                {{ data.data().text }}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <input
            class="border rounded mr-2 p-2 bg-gray-100"
            placeholder="Enter your message here..."
            v-model="msg"
          />
          <button
            class="border rounded py-2 px-4 bg-purple-500 text-white font-bold"
            @click="send"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref } from "vue"
import AppTitleBar from "../components/AppTitleBar.vue"
import database from "../services/database/database.js"

export default {
  components: { AppTitleBar },
  setup() {
    const msg = ref("")

    const { sendMessage, getMessages, userData, uid } = database()
    
    const send = () => {
      sendMessage(msg.value)
      msg.value = ""
    }

    getMessages()
    return { msg, send, userData, uid }
  }
}
</script>
