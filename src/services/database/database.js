import { computed, ref } from "vue"
import firebase from "../../utils/firebase"
import store from "../../store/index.js"


const database = () => {
  const db = firebase.firestore()
  const collection = db.collection("messages")
  const msgList = ref([])
  
  const uid = computed(() => store.state.userData.uid)


  const getMessages = () => {
    collection.onSnapshot(snapshot => {
      msgList.value = []
      return snapshot.forEach(msg => {
        msgList.value.push(msg)
      })
    })
  }

  const sendMessage = async msg => {
    try {
      await collection.doc().set({ userId: uid.value, text: msg })
    } catch (error) {
      console.log(error)
    }
  }

  return { getMessages, sendMessage, msgList }
}

export default database
