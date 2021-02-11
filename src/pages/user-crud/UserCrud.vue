<template>
  <div class="w-full">
    <div class="px-6 py-2 flex-col w-max m-auto">
      <div class="my-5 text-right">
        <button
          class="rounded text-white font-bold bg-pink-500 hover:bg-pink-700 py-2 px-4"
          @click="openModal"
        >
          Add New User
        </button>
      </div>
      <div v-if="userData">
        <table class="w-full">
          <tr>
            <!-- <th class="border p-2 font-bold">ID</th> -->
            <th class="border p-2 font-bold">Avatar</th>
            <th class="border p-2 font-bold">Name</th>
            <th class="border p-2 font-bold">Email</th>
            <th class="border p-2 font-bold">Actions</th>
          </tr>
          <tr v-for="user in userData.slice().reverse()" :key="user">
            <!-- <td class="border px-4 py-2">{{ user.data().id }}</td> -->
            <td class="border px-4 py-2">
              <img
                :src="user.data().avatar"
                alt="user_image"
                class="w-14 rounded-full hover:scale-150"
              />
            </td>
            <td class="border px-4 py-2">{{ user.data().name }}</td>
            <td class="border px-4 py-2">{{ user.data().email }}</td>
            <td class="border px-4 py-2 justify-evenly">
              <button class="actionButton bg-green-500" @click="onUpdate(user)">
                Update
              </button>
              <button
                class="actionButton bg-red-500"
                @click="deleteUserData(user.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </table>

        <div class="flex justify-between mt-2">
          <button
            class="rounded text-white font-bold bg-pink-500 hover:bg-pink-700 py-2 px-4"
            @click="prev"
          >
            Prev
          </button>
          <button
            class="rounded text-white font-bold bg-pink-500 hover:bg-pink-700 py-2 px-4"
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
  </div>
  <AddUserModal v-if="isModalOpen" @closeAddUserModal="closeModal" />
  <UpdateUserModal
    v-if="isUpdating"
    @closeUpdateUserModal="closeUpdateModal" :userInfo="userInfo"
  ></UpdateUserModal>
</template>

<script>
import { onMounted, ref } from "vue"

import useCrudOperations from "../../hooks/useCrudOperations"
import AddUserModal from "./AddUserModal.vue"
import UpdateUserModal from "./UpdateUserModal.vue"


export default {
  components: { AddUserModal, UpdateUserModal },
  setup() {

    const userInfo = ref(null)
    const {
      userData,
      getUserData,
      openModal,
      next,
      prev,
      deleteUserData,
      isModalOpen,
      closeModal,
      isUpdating,
      closeUpdateModal,
      updatingUserId
    } = useCrudOperations()

    const onUpdate = user => {
      userInfo.value = user
      isUpdating.value = true
    }

    onMounted(() => getUserData())
    return {
      userData,
      prev,
      next,
      openModal,
      onUpdate,
      deleteUserData,
      isModalOpen,
      closeModal,
      isUpdating,
      closeUpdateModal,
      updatingUserId,
      userInfo
    }
  }
}
</script>
