import { db } from "../firebase/Fire"

export const getMyUser = (userId, setUser) => {
  db.collection('users').doc(userId).onSnapshot(snap => {
    setUser(snap.data())
  })
}

