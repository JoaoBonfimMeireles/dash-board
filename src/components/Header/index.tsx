import {Logo} from "../../assets/logo";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Logo />
            <button type="button">
                Nova Transação
            </button>
        </Container>
    )
}