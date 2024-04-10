import {Logo} from "../../assets/logo";

export function Header() {
    return (
        <header>
            <Logo />
            <button type="button">
                Nova Transação
            </button>
        </header>
    )
}