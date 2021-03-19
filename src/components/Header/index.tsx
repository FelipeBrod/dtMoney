import { Container, Content } from "./styles";
import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button">New Transaction</button>
      </Content>
    </Container>
  );
}
