import styled, { css } from "styled-components";

interface ModalProps {
  Title: string;
  contentStock: React.ReactNode;
  isOpenStock: boolean;
  modalanimation: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  Title,
  isOpenStock,
  modalanimation,
  onClose,
  contentStock,
}) => {
  return (
    <>
      <ModalBackground isopen={isOpenStock} onClick={onClose}></ModalBackground>
      <ModalContainer isopen={isOpenStock}>
        <ModalTitleStockHolm>{Title}</ModalTitleStockHolm>
        <ModalClose onClick={onClose}> </ModalClose>

        <ModalStockHomle isopen={isOpenStock} modalanimation={modalanimation}>
          <ModalImage isopen={isOpenStock}>{contentStock} </ModalImage>
        </ModalStockHomle>
      </ModalContainer>
    </>
  );
};

export default Modal;
const ModalImage = styled.div<{ isopen: boolean }>`
  position: absolute;

  width: 100%;
  height: 100%;
  display: none;

  ${(props) =>
    props.isopen &&
    `
  display:block;
  `}
`;
const ModalBackground = styled.div<{ isopen: boolean }>`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: none;
  transform: translateY(-20px);
  transition: all 0.4s;

  ${(props) =>
    props.isopen
      ? css`
          display: block;
          transform: translateY(0);
          transition: all 0.4s;
          opacity: 1;
        `
      : `display:none`}
`;
const ModalContainer = styled.div<{ isopen: boolean }>`
  display: none;

  ${(props) =>
    props.isopen &&
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
const ModalStockHomle = styled.div<{
  modalanimation: boolean;
  isopen: boolean;
}>`
  width: 70%;
  height: 74%;
  background-color: white;
  position: absolute;
  left: 15%;
  transform: translateY(10px);
  top: 10%;
  opacity: 0;

  transition: all 0.4s;

  ${(props) =>
    props.modalanimation &&
    props.isopen &&
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
