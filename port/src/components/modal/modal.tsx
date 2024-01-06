import styled, { css } from "styled-components";

interface ModalProps {
  Title: string;
  contentImg: string;
  isOpenStock: boolean;
  modalanimation: boolean;
  onClose: () => void;
  contents: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({
  Title,
  isOpenStock,
  modalanimation,
  onClose,
  contentImg,
  contents,
}) => {
  return (
    <>
      <ModalBackground isopen={isOpenStock} onClick={onClose}></ModalBackground>
      <ModalContainer isopen={isOpenStock}>
        <ModalTitleStockHolm>{Title}</ModalTitleStockHolm>
        <ModalClose onClick={onClose}> Close</ModalClose>

        <ModalStockHomle isopen={isOpenStock} modalanimation={modalanimation}>
          <ModalImage isopen={isOpenStock}>
            <a
              target="_blank"
              href="http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/"
            >
              <img src={contentImg} />
            </a>
          </ModalImage>
          <ModalSkillContainer>
            <div>
              <p>사용된 기술</p>
            </div>
            <div>{contents}</div>
          </ModalSkillContainer>
        </ModalStockHomle>
      </ModalContainer>
    </>
  );
};

export default Modal;

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
  top: 7%;
  left: 46%;

  font-size: 40px;
`;
const ModalStockHomle = styled.div<{
  modalanimation: boolean;
  isopen: boolean;
}>`
  width: 50%;
  height: 670px;
  background-color: white;
  position: fixed;
  left: 25%;
  transform: translateY(10px);
  top: 16%;
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
const ModalSkillContainer = styled.div`
  position: absolute;

  display: flex;
  color: black;
  flex-direction: column;
  font-family: "IBM Plex Sans KR", sans-serif;
  bottom: 5%;
`;

const ModalImage = styled.div<{ isopen: boolean }>`
  position: absolute;
  overflow: hidden;
  display: none;
  a {
  }
  img {
    width: 100%;
    transition: all.4s;
    over-fit: contain;
    overflow: hidden;
    &:hover {
      transform: scale(1.1, 1.1);
      overflow: hidden;
    }
  }

  ${(props) =>
    props.isopen &&
    `
  display:block;
  `}
`;
const ModalClose = styled.div`
  width: 60px;
  text-align: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  height: 30px;
  background-color: #333;
  position: absolute;
  top: 13%;
  right: 25%;
`;
