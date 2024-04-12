import React, { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { DashBoard } from './components/DashBoard';

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
      <Modal
        isOpen={insNewTransactionalModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
