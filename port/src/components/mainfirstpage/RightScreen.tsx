import { styled } from "styled-components";
const RightScreen = () => {
  return <RightScreenContainer></RightScreenContainer>;
};
export default RightScreen;
const RightScreenContainer = styled.div`
  position: absolute;
  background: red;
  width: 50%;
  height: 100%;
  right: 0;
  z-index: 1;
`;
