import { useState } from "react";
import Modal from 'react-modal';
import { Logo } from "../../assets/Logo";
import { Container, Content } from "./styles";

export function Header() {

    const [ insNewTransactionalModalOpen, setInsNewTransactionalModalOpen ] = useState(false);

    function handleOpenNewTransactionModal() {
        setInsNewTransactionalModalOpen(true);
    }

    function handleClosenNewTransactionModal() {
        setInsNewTransactionalModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <Logo />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>

                <Modal isOpen={insNewTransactionalModalOpen} onRequestClose={handleClosenNewTransactionModal}>
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}