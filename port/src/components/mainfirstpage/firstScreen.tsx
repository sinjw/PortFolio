import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";

import { useDispatch, useSelector } from "react-redux";
import { clickButton } from "../reducer/buttonClick-reducer";
import { RootState } from "../../store/config";
import styled, { css } from "styled-components";

const FirstPage = () => {
  const dispatch = useDispatch();

  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const setClick = () => {
    dispatch(clickButton());
    console.log(isClicked);
  };

  return (
    <FirstScreenContainer>
      <RightScreen></RightScreen>
      <LeftScreen></LeftScreen>
      <MainButtonStyle onClick={setClick} isClicked={isClicked}>
        hi
      </MainButtonStyle>
    </FirstScreenContainer>
  );
};

export default FirstPage;
const FirstScreenContainer = styled.div``;
const MainButtonStyle = styled.button<{ isClicked: boolean }>`
  position: absolute;
  left: 30%;
  top: 50%;
  z-index: 80;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  ${(props) =>
    props.isClicked &&
    css`
      display: none;
      /* 다른 원하는 스타일 설정 추가 가능 */
    `}
`;
