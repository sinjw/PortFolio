import { styled } from "styled-components";
import LeftScreen from "./mainfirstpage/LeftScreen";
import RightScreen from "./mainfirstpage/RightScreen";
import Intro from "./intropage/intro";
const Main = () => {
  return (
    <MainContainer>
      <LeftScreen />
      <RightScreen />
      <Intro />
    </MainContainer>
  );
};

export default Main;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
