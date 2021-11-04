import React from 'react';
import StoreContextProvider from './src/app/store/context';
import ScreenNav from './src/app/navigation/ScreenNav'
import AuthGate from './src/app/auth/AuthGate';

export default function App() {

  return (
    <StoreContextProvider>
      <AuthGate />
    </StoreContextProvider>
  );
}

