import styled, { css } from "styled-components";

interface ModalProps {
  Title: string;
  content: React.ReactNode;
  isOpen: boolean;
  modalanimation: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  Title,
  isOpen,
  modalanimation,
  onClose,
}) => {
  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClose}></ModalBackground>
      <ModalContainer isOpen={isOpen}>
        <ModalTitleStockHolm>{Title}</ModalTitleStockHolm>
        <ModalClose onClick={onClose}> </ModalClose>
        <ModalStockHomle modalanimation={modalanimation}></ModalStockHomle>
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalBackground = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: none;
  transform: translateY(-20px);
  transition: all 0.4s;

  ${(props) =>
    props.isOpen
      ? css`
          display: block;
          transform: translateY(0);
          transition: all 0.4s;
          opacity: 1;
        `
      : `display:none`}
`;
const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: none;

  ${(props) =>
    props.isOpen &&
    `

display:block;`}
`;
const ModalTitleStockHolm = styled.div`
  color: white;
  position: absolute;
  top: 15%;
  left: 46%;

  font-size: 40px;
`;
const ModalStockHomle = styled.div<{ modalanimation: boolean }>`
  width: 800px;
  height: 500px;
  background-color: white;
  position: absolute;
  left: 30%;
  transform: translateY(10px);

  top: 24%;
  opacity: 0;

  transition: all 0.4s;
  ${(props) =>
    props.modalanimation &&
    css`
      transform: translate(0);
      transition: all 0.4s;
      opacity: 1;
    `}
`;

const ModalClose = styled.div`
  width: 100px;
  cursor: pointer;
  height: 100px;
  background-color: black;
  position: absolute;
  top: 10%;
  right: 10%;
`;
