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
    <>
      <RightScreen></RightScreen>
      <LeftScreen></LeftScreen>
      <MainButtonStyle onClick={setClick} isClicked={isClicked}>
        hi
      </MainButtonStyle>
    </>
  );
};

export default FirstPage;

const MainButtonStyle = styled.button<{ isClicked: boolean }>`
  position: absolute;
  left: 45%;
  top: 50%;
  z-index: 80;
  ${(props) =>
    props.isClicked &&
    css`
      display: none;
      /* 다른 원하는 스타일 설정 추가 가능 */
    `}
`;
