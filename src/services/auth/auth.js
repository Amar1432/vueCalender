import { ref } from "vue"
import firebase from "../../utils/firebase.js"
import store from "../../store/index.js"

const auth = () => {
  //Variables
  let provider = new firebase.auth.GoogleAuthProvider()
  const isLoggingIn = ref(false)
  const user = ref(null)


  // AuthState change method to track whether a user is logged in or not
  const authState = () => {
    firebase.auth().onAuthStateChanged(userCred => {
      if (userCred) {
        store.commit("setUserData", userCred)
        store.commit("setLogin", true)
        store.commit("setLoginModal", false)
        // user.value = userCred
      } else {
        store.commit("setUserData", {})
        store.commit("setLogin", false)
        // user.value = null
      }
    })
  }

  // SignIn Method to sign in via email and password
  const signIn = async (email, password) => {
    isLoggingIn.value = true
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      isLoggingIn.value = false
    } catch (error) {
      console.log(error)
      isLoggingIn.value = false
    }
  }

  // SignUp Method to create new user
  const signUp = async (email, password) => {
    isLoggingIn.value = true
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      isLoggingIn.value = false
    } catch (error) {
      console.log(error)
      isLoggingIn.value = false
    }
  }

  const googleSignIn = async () => {
    try {
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      console.log(error)
    }
  }

  // SignOut Method
  const signOut = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }

  // Returned methods and properties
  return {
    authState,
    signIn,
    signUp,
    isLoggingIn,
    signOut,
    user,
    googleSignIn
  }
}

export default auth
