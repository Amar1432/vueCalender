<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div v-if="userData">
      <table>
        <tr>
          <th class="border p-2 font-bold">ID</th>
          <th class="border p-2 font-bold">Avatar</th>
          <th class="border p-2 font-bold">First Name</th>
          <th class="border p-2 font-bold">Last Name</th>
          <th class="border p-2 font-bold">Email</th>
        </tr>
        <tr v-for="user in userData.data" :key="user">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">
            <img
              :src="user.avatar"
              alt="user_image"
              class="w-14 rounded-full hover:scale-150"
            />
          </td>
          <td class="border px-4 py-2">{{ user.first_name }}</td>
          <td class="border px-4 py-2">{{ user.last_name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
        </tr>
      </table>

      <div class="flex justify-between mt-2">
        <button
          class="rounded text-white font-bold bg-pink-500 hover:bg-pink-700 py-2 px-4"
          :disabled="userData.page == 1"
          @click="prev"
        >
          Prev
        </button>
        <button
          class="rounded text-white font-bold bg-pink-500 hover:bg-pink-700 py-2 px-4"
          :disabled="userData.page == userData.total_pages"
          @click="next"
        >
          Next
        </button>
      </div>
    </div>
    <div v-else>
      <h1>Please wait while the data is loading...</h1>
    </div>
  </div>
  <ResusableModal v-if="false">
    <template #title>
      Hello World
    </template>
    <template #body>
      <form class="p-5">
        <div class="my-4">
          <label class="font-bold">Name</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter name here"
          />
        </div>
        <div class="my-4">
          <label class="font-bold">Email</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter email here"
          />
        </div>
        <div class="my-4">
          <label class="font-bold">Avatar</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter avatar source"
          />
        </div>
        <button
          class="border w-full shadow-md rounded px-4 py-2 text-center bg-green-500 text-white font-bold"
        >
          Add User
        </button>
      </form>
    </template>
  </ResusableModal>
</template>

<script>
import axios from "axios"
import ResusableModal from "../components/ReusableModal.vue"
import { onMounted, ref } from "vue"
export default {
  components: { ResusableModal },
  setup() {
    const userData = ref()
    const getUserData = async url => {
      try {
        const { data } = await axios.get(url)
        userData.value = data
      } catch (error) {
        console.log(error)
      }
    }

    const prev = () => getUserData("https://reqres.in/api/users")
    const next = () => getUserData("https://reqres.in/api/users?page=2")
    onMounted(() => getUserData("https://reqres.in/api/users"))
    return { userData, prev, next }
  }
}
</script>
