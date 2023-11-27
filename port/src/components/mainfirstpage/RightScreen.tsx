import { styled, css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/config";
import { useEffect, useState } from "react";

const RightScreen = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);

  const [typingText, setTypingText] = useState<string>("");

  const targetText = "PORTFOLIO";
  useEffect(() => {
    setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= targetText.length) {
          setTypingText(targetText.slice(0, index));
          index += 1;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    }, 3500);
  }, []);

  //버튼상태구독
  return (
    <RightScreenContainer isClicked={isClicked}>
      <PtagContainer>
        <PtagTop>Front-end Developer</PtagTop>
      </PtagContainer>
      <PtagMiddle1>SINJOONGWON </PtagMiddle1>
      <PtagMiddle2>{typingText}</PtagMiddle2>
    </RightScreenContainer>
  );
};
export default RightScreen;

const RightScreenContainer = styled.div<{ isClicked: boolean }>`
  position: absolute;
  background: #1b1b1e;
  width: 70%;
  height: 100%;
  right: 0;

  z-index: 1;
  ${(props) =>
    props.isClicked &&
    css`
      transform: translateX(100%);
      transition: all 0.8s;
    `}
`;
const PtagContainer = styled.div`
  width: 100%;
`;
const PtagTop = styled.p`
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 40px;
  position: relative;
  margin-top: 10%;
  margin-left: 5%;
  padding-left: 30px;

  &::after {
    font-size: 50px;
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    border-left: 4px solid#fff;
    width: 13px;
    height: 50px;
  }
`;
const PtagMiddle1 = styled.p`
  font-size: 70px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900;
  margin-top: 15%;
  margin-left: 12%;
`;
const PtagMiddle2 = styled.p`
  font-size: 70px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900;
  margin-top: 15px;
  margin-left: 50%;
`;
