import { computed, ref } from "vue"
import firebase from "../../utils/firebase"
import store from "../../store/index.js"


const database = () => {
  const db = firebase.firestore()
  const collection = db.collection("messages")
  const msgList = ref([])
  
  const uid = computed(() => store.state.userData.uid)
  const name = computed(() => store.state.userData.displayName)


  const getMessages = () => {
    collection.orderBy('createdAt','desc').limit(25).onSnapshot(snapshot => {
      msgList.value = []
      return snapshot.forEach(msg => {
        msgList.value.push(msg)
      })
    })
  }

  const sendMessage = async msg => {
    try {
      await collection.doc().set({ userId: uid.value, text: msg, createdAt: firebase.firestore.FieldValue.serverTimestamp(), name: name.value || 'Unknown'})
    } catch (error) {
      console.log(error)
    }
  }

  return { getMessages, sendMessage, msgList, name }
}

export default database
