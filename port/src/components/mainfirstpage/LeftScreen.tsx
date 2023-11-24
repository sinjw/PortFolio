import ProFile from "../../assets/ProfileImage.png";
import { styled, css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/config";
const LeftScreen = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  //버튼상태구독

  return (
    <LeftScreenContainer isClicked={isClicked}>
      <ProFileImg src={ProFile} />
      <PtagContainer>
        <Ptag1>신중원</Ptag1>
      </PtagContainer>
      <PtagContainer>
        <Ptag2>{LeftSCtext.board}</Ptag2>
      </PtagContainer>
    </LeftScreenContainer>
  );
};
export default LeftScreen;

const LeftSCtext = {
  board:
    " 안녕하세요 프론트엔드 개발자의 꿈을 가진 신중원 입니다. 2023년 10월에코드스테이츠 부트캠프 과정을 수료한 후 개발자가 되기위하여 꾸준히노력하고있습니다.",
};

const LeftScreenContainer = styled.div<{ isClicked: boolean }>`
  position: absolute;
  background: white;
  width: 50%;
  height: 100%;
  left: 0;
  text-align: center;

  z-index: 1;
  ${(props) =>
    props.isClicked &&
    css`
      transform: translateX(-100%);
      transition: all 0.4s;
    `}
`;
const ProFileImg = styled.img`
  width: 170px;
  height: 170px;
  margin-top: 13%;

  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.6));
`;

const Ptag1 = styled.p`
  width: 100px;
  margin-top: 50px;

  &::before {
    content: "";
    display: block;
    margin-bottom: 30px;
    width: 100px;
    height: 4px;
    background-color: #333;
  }
`;
const Ptag2 = styled.p`
  max-width: 430px;
`;
const PtagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
