import LeftScreen from "./leftScreen";
import RightScreen from "./rightScreen";

import { useDispatch, useSelector } from "react-redux";
import { clickButton } from "../reducer/buttonClick-reducer";
import { RootState } from "../../store/config";
import styled, { css, keyframes } from "styled-components";

const FirstPage = () => {
  const dispatch = useDispatch();

  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const setClick = () => {
    dispatch(clickButton());
  };

  return (
    <FirstScreenContainer>
      <RightScreen></RightScreen>
      <LeftScreen></LeftScreen>
      <MainButtonStyle onClick={setClick} isClicked={isClicked}>
        Open
      </MainButtonStyle>
    </FirstScreenContainer>
  );
};

export default FirstPage;
const FirstScreenContainer = styled.div`
  @media (max-width: 500px) {
    max-width: 500px;
  }
`;
const buttonAnimation = keyframes`
  from {
   width:30px;
   height:30px;
   background-color:#eee;
   opacity:1;
  }
  to {
    width:78px;
    height:78px;
    background-color:#ccc;
    opacity:0;
  }
`;
const MainButtonStyle = styled.button<{ isClicked: boolean }>`
  position: absolute;
  left: 30%;
  top: 50%;
  z-index: 80;

  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: none;
  background-color: rgba(130, 130, 130, 0.6);

  border-radius: 50%;

  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900;

  transition: all 0.4s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid#ccc;
    cursor: pointer;
    &::after {
      animation: none;
    }
  }
  &::after {
    content: "";
    width: 30px;
    height: 30px;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    position: absolute;
    animation: ${buttonAnimation} 1.3s ease infinite;
  }

  ${(props) =>
    props.isClicked &&
    css`
      display: none;
      /* 다른 원하는 스타일 설정 추가 가능 */
    `}

  @media(max-width:500px) {
    left: 45%;
    top: 60%;
  }
`;
