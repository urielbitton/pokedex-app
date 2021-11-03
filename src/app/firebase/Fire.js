import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore'
 
const config = {
  apiKey: "AIzaSyByf05Zfff1C6N-EzJTpTWHvQ7yImE9Whc",
  authDomain: "pokedex-3d667.firebaseapp.com",
  projectId: "pokedex-3d667",
  storageBucket: "pokedex-3d667.appspot.com",
  messagingSenderId: "579135470775",
  appId: "1:579135470775:web:3ddfa49f427a95d7b06132"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase } 