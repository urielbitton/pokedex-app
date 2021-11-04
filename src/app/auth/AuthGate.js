import React, { useContext } from 'react'
import ScreenNav from '../navigation/ScreenNav';
import AuthScreen from '../screens/AuthScreen';
import { StoreContext } from '../store/context';

export default function AuthGate() {

  const {login} = useContext(StoreContext)

  return (
    login ? <ScreenNav /> : <AuthScreen />
  )
}
