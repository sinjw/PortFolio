import FirstPage from "./mainfirstpage/firstScreen";
import Intro from "./introPage/introMain";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./../store/config";
const Main = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);

  return (
    <MainContainer isClicked={isClicked}>
      <FirstPage />
      <Intro />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div<{ isClicked: boolean }>`
  /* 공통 스타일 설정 */
  width: 100%;
  height: 100vh;
  overflow: hidden;
  min-width: 950px;
  @media (max-width: 500px) {
    max-width: 500px;
  }

  /* isClicked 값에 따른 동적 스타일 설정 */
  ${(props) =>
    props.isClicked &&
    css`
      overflow: visible;

      /* 다른 원하는 스타일 설정 추가 가능 */
    `}
`;
