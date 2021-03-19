import incomeImg from "../../assets/income.svg";
import debtImg from "../../assets/debts.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Debts</p>
          <img src={debtImg} alt="Debts" />
        </header>
        <strong>$-500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500,00</strong>
      </div>
    </Container>
  );
}
