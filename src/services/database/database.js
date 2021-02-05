import { ref } from "vue"
import firebase from "../../utils/firebase"

const database = () => {
  const db = firebase.firestore()
  const collection = db.collection("messages")
  const uid = ref(null)
  const userData = ref([])

  firebase.auth().onAuthStateChanged(userData => {
    if (userData) {
      uid.value = userData.uid
    } else {
      uid.value = null
    }
  })

  const getMessages = () => {
    collection.onSnapshot(snapshot => {
      userData.value = []
        return snapshot.forEach((msg)=> {
            userData.value.push(msg)
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

  return { getMessages, uid, sendMessage, userData }
}

export default database
