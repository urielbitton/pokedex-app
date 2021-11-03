import React from 'react';
import StoreContextProvider from './src/app/store/context';
import ScreenNav from './src/app/navigation/ScreenNav'

export default function App() {

  return (
    <StoreContextProvider>
      <ScreenNav />
    </StoreContextProvider>
  );
}

