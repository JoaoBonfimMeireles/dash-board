import React from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { DashBoard } from './components/DashBoard';

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
