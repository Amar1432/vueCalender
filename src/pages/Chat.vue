<template>
  <div class="text-center">
    <AppTitleBar>Realtime Chat</AppTitleBar>
  </div>
  <section class="w-full flex justify-center">
    <div class="border rounded-lg px-2 py-4 shadow-md w-4/6">
      <div class="h-96 w-full overflow-y-scroll">
        <div v-if="msgList">
          <div
            v-for="msg in msgList.slice().reverse()"
            :key="msg"
            class="flex flex-col"
            :class="{ 'items-end': msg.data().userId == uid }"
          >
          <small v-if="msg.data().userId != uid" class="ml-3 text-gray-500">{{msg.data().name}}</small>
            <h1
              ref="dummy"
              class="px-3 py-2 mb-1 rounded-full border text-white bg-green-500 mx-2 font-bold self-start max-w-4/6"
              :class="{ 'bg-pink-500 text-white self-end': msg.data().userId == uid }"
            >
              {{ msg.data().text }}
            </h1>
          </div>
        </div>
        <div v-else>
          <h1>Please wait loading your messages...</h1>
        </div>
      </div>
      <div class="w-full flex justify-between mt-2">
        <input
          class="border rounded-full mr-2 py-2 px-3 bg-gray-100 w-11/12 focus:outline-none"
          placeholder="Enter your message here..."
          v-model="msg"
          @keydown.enter="send"
        />
        <button
          class="border rounded py-2 px-4 bg-purple-500 text-white font-bold flex-grow"
          @click="send"
        >
          send
        </button>
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
    const msg = ref('')
    const store = useStore()
    const dummy = ref(null)
    const isLoggedIn = computed(()=> store.state.isLoggedIn)

    const uid = computed(() => store.state.userData.uid)
    const { sendMessage, getMessages, msgList } = database()

    const send = () => {
      sendMessage(msg.value)
      msg.value = ""
    }

    getMessages()
    return { msg, send, msgList, uid, dummy, isLoggedIn }
  }
}
</script>
