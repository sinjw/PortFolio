import { styled } from "styled-components";
import FirstPage from "./mainfirstpage";
import Intro from "./introPage/intro";
const Main = () => {
  return (
    <MainContainer>
      <FirstPage />
      <Intro />
    </MainContainer>
  );
};

export default Main;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
