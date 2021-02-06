<template>
  <div class="text-center">
    <AppTitleBar>Realtime Chat</AppTitleBar>
  </div>
  <section class="w-full h-screen flex">
    <div class="mx-auto">
      <div class="border rounded-lg px-2 py-4 shadow-md">
        <div class="h-96 overflow-y-scroll">
          <div v-if="msgList">
            <div
              v-for="msg in msgList"
              :key="msg"
              class="flex"
              :class="{ 'justify-end': msg.data().userId == uid }"
            >
              <h1
                class="px-4 py-2 my-1 rounded-lg border bg-gray-100 mx-2 font-bold"
                :class="{ 'text-right bg-green-300': msg.data().userId == uid }"
              >
                {{ msg.data().text }}
              </h1>
            </div>
          </div>
          <div v-else>
            <h1>Please wait loading your messages...</h1>
          </div>
        </div>
        <div>
          <input
            class="border rounded mr-2 p-2 bg-gray-100"
            placeholder="Enter your message here..."
            v-model="msg"
            @keydown.enter="send"
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
import { computed, ref } from "vue"
import AppTitleBar from "../components/AppTitleBar.vue"
import database from "../services/database/database.js"
import { useStore } from "vuex"

export default {
  components: { AppTitleBar },
  setup() {
    const msg = ref("")
    const store = useStore()

    const uid = computed(() => store.state.userData.uid)
    const { sendMessage, getMessages, msgList } = database()

    const send = () => {
      sendMessage(msg.value)
      msg.value = ""
    }

    getMessages()
    return { msg, send, msgList, uid }
  }
}
</script>
