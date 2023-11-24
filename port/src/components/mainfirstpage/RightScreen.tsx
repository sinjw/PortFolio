import { styled, css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/config";

const RightScreen = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  //버튼상태구독
  return <RightScreenContainer isClicked={isClicked}></RightScreenContainer>;
};
export default RightScreen;

const RightScreenContainer = styled.div<{ isClicked: boolean }>`
  position: absolute;
  background: #1b1b1e;
  width: 50%;
  height: 100%;
  right: 0;

  z-index: 1;
  ${(props) =>
    props.isClicked &&
    css`
      transform: translateX(100%);
      transition: all 0.4s;
    `}
`;
