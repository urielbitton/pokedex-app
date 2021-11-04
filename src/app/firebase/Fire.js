import firebase from "firebase"
 
const config = {
  apiKey: "AIzaSyBwBbPPIItlUIMCUwznjYQ17oWizFQOd5Y",
  authDomain: "pokedex-v2-1aff8.firebaseapp.com",
  projectId: "pokedex-v2-1aff8",
  storageBucket: "pokedex-v2-1aff8.appspot.com",
  messagingSenderId: "259641693209",
  appId: "1:259641693209:web:3186a4507bafa030750688"
}
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 

