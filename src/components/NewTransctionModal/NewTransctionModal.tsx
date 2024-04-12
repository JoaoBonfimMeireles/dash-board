import Modal from 'react-modal';

interface NewTransctionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransctionModal({isOpen, onRequestClose}: NewTransctionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    )
};