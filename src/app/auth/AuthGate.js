import React, { useContext, useEffect } from 'react'
import ScreenNav from '../navigation/ScreenNav';
import LoginScreen from '../auth/LoginScreen';
import { StoreContext } from '../store/context';
import RegisterScreen from './RegisterScreen';

export default function AuthGate() {

  const {user, setMyUser, logAuth, setLogAuth} = useContext(StoreContext)

  useEffect(() => {
    if(!user) {
      setMyUser({})
    }
  },[user])

  return (
    user ? 
    <ScreenNav /> : 
    logAuth ?
    <LoginScreen /> :
    <RegisterScreen />
  )
}
