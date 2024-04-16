import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import { Close } from '../../assets/Close';
import { Outcome } from '../../assets/Outcome';
import { Income } from '../../assets/Income';

interface NewTransctionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransctionModal({ isOpen, onRequestClose }: NewTransctionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <Close />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Titulo'
                />

                <input
                    type='number'
                    placeholder='Valor'
                />

                <TransactionTypeContainer>
                    <button type='button'>
                        <Income className="img" />
                        <span>Entrada</span>
                    </button>
                    <button type='button'>
                        <Outcome className="img" />
                        <span>Saida</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                />

                <button type='submit'>
                    cadastrar
                </button>
            </Container>
        </Modal>
    )
};