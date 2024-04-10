import { Income } from "../../assets/Income";
import { Outcome } from "../../assets/Outcome";
import { TotalImg } from "../../assets/TotalImg";
import { Container } from "./styles";


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <Income />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <Outcome />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <TotalImg />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
        </Container>
    )
}