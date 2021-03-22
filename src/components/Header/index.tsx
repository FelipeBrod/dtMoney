import { Container, Content } from "./styles";
import logoImg from "../../assets/Logo.svg";
import { useState } from "react";
import Modal from "react-modal";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
