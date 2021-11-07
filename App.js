import React from 'react';
import StoreContextProvider from './src/app/store/context';
import AuthGate from './src/app/auth/AuthGate';

export default function App() {

  return (
    <StoreContextProvider>
      <AuthGate />
    </StoreContextProvider>
  );
}

