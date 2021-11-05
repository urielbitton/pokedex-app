import React, { useContext, useEffect } from 'react'
import ScreenNav from '../navigation/ScreenNav';
import LoginScreen from '../auth/LoginScreen';
import { StoreContext } from '../store/context';

export default function AuthGate() {

  const {user, setMyUser} = useContext(StoreContext)

  useEffect(() => {
    if(!user) {
      setMyUser({})
    }
  },[user])

  return (
    user ? <ScreenNav /> : <LoginScreen />
  )
}
