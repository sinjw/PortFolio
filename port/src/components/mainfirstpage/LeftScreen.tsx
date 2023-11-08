import ProFile from "../../assets/ProfileImage.png";
import { styled } from "styled-components";
const LeftScreen = () => {
  return (
    <LeftScreenContainer>
      <ProFileImg src={ProFile} />
    </LeftScreenContainer>
  );
};
export default LeftScreen;
const LeftScreenContainer = styled.div`
  position: absolute;
  background: black;
  width: 50%;
  height: 100%;
  z-index: 1;
`;
const ProFileImg = styled.img`
  width: 170px;
  height: 170px;
`;
