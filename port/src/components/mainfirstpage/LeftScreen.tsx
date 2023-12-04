import ProFile from "../../assets/ProfileImage.png";
import { useState, useEffect } from "react";
import { styled, css, keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
const LeftScreen = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const [loadTag, setLoadtag] = useState(false);
  const [loadTag2, setLoadtag2] = useState(false);
  const [loadTag3, setLoadtag3] = useState(false);
  const [loadTag4, setLoadtag4] = useState(false);

  useEffect(() => {
    setLoadtag(true);
    setTimeout(() => {
      setLoadtag2(true);
    }, 1000);
    setTimeout(() => {
      setLoadtag3(true);
    }, 2000);
    setTimeout(() => {
      setLoadtag4(true);
    }, 3000);
  }, []);

  //버튼상태구독

  return (
    <LeftScreenContainer isClicked={isClicked}>
      <ProFileImg src={ProFile} />
      <PtagContainer>
        <Ptag1 loadTag={loadTag}>{LeftSCtext.name}</Ptag1>
      </PtagContainer>
      <PtagContainer>
        <Ptag2 loadTag2={loadTag2}>{LeftSCtext.board1}</Ptag2>
      </PtagContainer>
      <Ptag3 loadTag3={loadTag3}>
        프론트엔드 개발자의 꿈을 가진 <br />
        <Span loadTag4={loadTag4}>신중원</Span> 입니다.
        <br />
        {LeftSCtext.board3} <br />
        {LeftSCtext.board4}
      </Ptag3>
    </LeftScreenContainer>
  );
};
export default LeftScreen;

const LeftSCtext = {
  name: "신중원",
  board1: " 안녕하세요 방문해주셔서 감사합니다. ",
  board2: "",
  board3: "비전공자 이지만 코드스테이츠 부트캠프 과정을 수료한 후",
  board4: "개발자가 되기위하여 꾸준히노력하고있습니다.",
};
const Ptag1Animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LeftScreenContainer = styled.div<{ isClicked: boolean }>`
  position: absolute;
  background: white;
  width: 30%;
  min-width: 300px;
  height: 100%;
  left: 0;
  text-align: center;

  z-index: 3;
  ${(props) =>
    props.isClicked &&
    css`
      transform: translateX(-100%);
      transition: all 0.8s;
    `}
`;
const ProFileImg = styled.img`
  width: 170px;
  height: 170px;
  margin-top: 25%;

  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.6));
`;

const Ptag1 = styled.p<{ loadTag: boolean }>`
  width: 150px;
  margin-top: 50px;
  font-size: 45px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  color: #333;

  &::before {
    content: "";
    display: block;
    margin-bottom: 30px;
    width: 40px;
    height: 5px;
    background-color: #333;
    margin-left: 36%;
  }
  ${(props) =>
    props.loadTag &&
    css`
      animation: ${Ptag1Animation} 1s ease-in-out;
      transition: all 0.8s;
    `}
`;
const Ptag2 = styled.p<{ loadTag2: boolean }>`
  max-width: 430px;
  text-align: center;
  font-size: 25px;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 5px;
  }
  opacity: 0;
  margin-top: -20px;
  ${(props) =>
    props.loadTag2 &&
    css`
      opacity: 1;
      margin-top: 20px;
      transition: all 1s;
    `}
`;
const Ptag3 = styled.p<{ loadTag3: boolean }>`
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  transform: translateX(-100%);
  opacity: 0;
  ${(props) =>
    props.loadTag3 &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: all 1s;
    `}
`;

const Span = styled.span<{ loadTag4: boolean }>`
  position: relative;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  &::after {
    left: 0;
    top: 23px;
    content: "";
    position: absolute;
    width: 80px;
    height: 15px;
    background-color: green;
    opacity: 0.5;
  }
  opacity: 0;
  ${(props) =>
    props.loadTag4 &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: all 1s;
    `}
`;
const PtagContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-around;
  margin-top: 20px;
`;
