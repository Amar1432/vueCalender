<template>
  <ResusableModal @closeModal="$emit('closeAddUserModal')">
    <template #title>
      Enter user details here
    </template>
    <template #body>
      <form class="p-5" @submit.prevent="addUser">
        <div class="my-4">
          <label class="font-bold">Name</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter name here"
            v-model="inputUserData.name"
          />
        </div>
        <div class="my-4">
          <label class="font-bold">Email</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter email here"
            v-model="inputUserData.email"
          />
        </div>
        <div class="my-4">
          <label class="font-bold">Avatar</label>
          <input
            type="text"
            class="rounded shadow w-full p-2 my-2"
            placeholder="enter avatar source"
            v-model="inputUserData.avatar"
          />
        </div>
        <button
          class="border w-full shadow-md rounded px-4 py-2 text-center bg-green-500 text-white font-bold"
        >
          <span v-if="isLoading">⏳</span>
          <span v-else>Add User</span>
        </button>
      </form>
    </template>
  </ResusableModal>
</template>

<script>
import useCrudOperations from "../../hooks/useCrudOperations"
import ResusableModal from "../../components/ReusableModal.vue"

export default {
  components: { ResusableModal },
  emits: ['closeAddUserModal'],
  setup(_,{emit}) {
    const {
      addUserData,
      inputUserData,
      isLoading,
    } = useCrudOperations()
    const addUser = async ()=> {
        await addUserData()
        emit('closeAddUserModal')
    }

    return {
      inputUserData,
      isLoading,
      addUser
    }
  }
}
</script>
