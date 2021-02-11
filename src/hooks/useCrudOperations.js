import { reactive, ref } from "vue"
import axios from "../plugins/axios"
import firebase from "../utils/firebase"

const useCrudOperations = () => {
  const db = firebase.firestore()
  const collection = db.collection("users")
  const userData = ref([])
  const isLoading = ref(false)
  const isModalOpen = ref(false)
  const isUpdating = ref(false)
  const updatingUserId = ref(null)
  const inputUserData = ref({
    name: "",
    email: "",
    avatar: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })

  const getUserData = () => {
    try {
      collection
        .orderBy("createdAt", "desc")
        .limit(20)
        .onSnapshot(snapshot => {
          userData.value = []
          snapshot.forEach(users => {
            userData.value.push(users)
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  const clearInputField = () => {
    inputUserData.value.name = ""
    inputUserData.value.email = ""
    inputUserData.value.avatar = ""
  }

  const addUserData = async () => {
    isLoading.value = true
    try {
      await collection.doc().set(inputUserData.value)
      isLoading.value = false
      clearInputField()
    } catch (error) {
      console.log(error)
      isLoading.value = false
      clearInputField()
    }
  }

  const updateUserData = async (uid,updatedData) => {
    try {
      await collection.doc(uid).update(updatedData)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUserData = userId => {
    collection.doc(userId).delete()
  }

  // Methos to open or close our input modal
  const openModal = () => (isModalOpen.value = true)
  const closeModal = () => {
    isModalOpen.value = false
  }

  const openUpdateModal = () => (isUpdating.value = true)
  const closeUpdateModal = () => {
    isUpdating.value = false
  }

  const prev = () => getUserData(`/users`)
  const next = () => getUserData(`/users?page=2`)

  return {
    getUserData,
    userData,
    addUserData,
    openModal,
    closeModal,
    isLoading,
    isModalOpen,
    prev,
    next,
    inputUserData,
    updateUserData,
    deleteUserData,
    isUpdating,
    openUpdateModal,
    closeUpdateModal,
    updatingUserId
  }
}

export default useCrudOperations
