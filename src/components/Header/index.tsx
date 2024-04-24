import { Logo } from "../../assets/Logo";
import { Container, Content } from "./styles";


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <Logo />
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}
