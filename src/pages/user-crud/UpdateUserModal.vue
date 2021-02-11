<template>
  <ResusableModal @closeModal="$emit('closeUpdateUserModal')">
    <template #title>
      Enter user details here
    </template>
    <template #body>
      <form class="p-5" @submit.prevent="updateUser">
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
          <span v-else>Update User</span>
        </button>
      </form>
    </template>
  </ResusableModal>
</template>

<script>
import useCrudOperations from "../../hooks/useCrudOperations"
import ResusableModal from "../../components/ReusableModal.vue"
import { ref } from "vue"

export default {
  props: ["userInfo"],
  components: { ResusableModal },
  emits: ["closeUpdateUserModal"],
  setup(props, { emit }) {
    const isLoading = ref(false)

    const inputUserData = ref({
      name: props.userInfo.data().name,
      email: props.userInfo.data().email,
      avatar: props.userInfo.data().avatar
    })

    const { updateUserData } = useCrudOperations()

    const updateUser = async () => {
      isLoading.value = true
      try {
        await updateUserData(props.userInfo.id, inputUserData.value)
        emit("closeUpdateUserModal")
        isLoading.value = false
      } catch (error) {
        console.log(error)
        emit("closeUpdateUserModal")
        isLoading.value = false
      }
    }

    return {
      inputUserData,
      isLoading,
      updateUser
    }
  }
}
</script>
