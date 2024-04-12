import React, { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { DashBoard } from './components/DashBoard';
import { NewTransctionModal } from './components/NewTransctionModal/NewTransctionModal';

Modal.setAppElement("#root");

export function App() {
  const [insNewTransactionalModalOpen, setInsNewTransactionalModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setInsNewTransactionalModalOpen(true);
  }

  function handleClosenNewTransactionModal() {
    setInsNewTransactionalModalOpen(false);
  }


  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <DashBoard />
      <NewTransctionModal 
      isOpen={insNewTransactionalModalOpen}
      onRequestClose={handleClosenNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
