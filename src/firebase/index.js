import firebase from "firebase"
import { toast } from "react-toastify"
import "@firebase/auth"
import "@firebase/firestore"
import "@firebase/functions"

export const firebaseConfig = {
  apiKey: "AIzaSyBO-_XgZYsopOA2Tp-Yqvj5mjuzZA7mIes",
  authDomain: "client-2-b9854.firebaseapp.com",
  databaseURL: "https://client-2-b9854.firebaseio.com",
  projectId: "client-2-b9854",
  storageBucket: "client-2-b9854.appspot.com",
  messagingSenderId: "956782563649",
  appId: "1:956782563649:web:57d7c952ce038f6bfe51c0",
  measurementId: "G-G9VJJK3Z4Z",
}
export default firebase.initializeApp(firebaseConfig)
export const writeUserData = signInData => {
  firebase.database().ref("/").set([signInData])
  console.log("DATA SAVED")
}

export const getUserData = setBookingData => {
  let ref = firebase.database().ref("/")
  ref.on("value", snapshot => {
    setBookingData(snapshot.val())
  })
}
export const signInUser = async data => {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
    localStorage.setItem("token", result.user.refreshToken)
    toast("success", "Successfully  logged in")
    return result
  } catch (error) {
    toast("error", "An error occurred")

    console.log(error)
  }
}
