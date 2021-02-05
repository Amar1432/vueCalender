import firebase from "firebase/app"

import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKtFfMp9nPZDMvYzIhWegvMG5SC3dPEE8",
  authDomain: "vue3-full-course-aa5e6.firebaseapp.com",
  projectId: "vue3-full-course-aa5e6",
  storageBucket: "vue3-full-course-aa5e6.appspot.com",
  messagingSenderId: "811490942208",
  appId: "1:811490942208:web:811d40d8452448900c67e5"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
