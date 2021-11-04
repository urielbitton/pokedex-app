import React from 'react';
import StoreContextProvider from './src/app/store/context';
import ScreenNav from './src/app/navigation/ScreenNav'
import AuthScreen from './src/app/screens/AuthScreen';

export default function App() {

  return (
    <StoreContextProvider>
      {/* <ScreenNav /> */}
      <AuthScreen />
    </StoreContextProvider>
  );
}

