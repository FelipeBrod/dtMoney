import { Container, Content } from "./styles";
import logoImg from "../../assets/Logo.svg";
import { useState } from "react";
import Modal from "react-modal";
export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          New Transaction
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          New transaction
        </Modal>
      </Content>
    </Container>
  );
}
