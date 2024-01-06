import styled from "styled-components";
import { useState, useEffect } from "react";
import StockHolmLogo from "../../assets/stockholmLogo.png";
import StockHolmIamges from "../../assets/stockholm.png";
import PortFolioIamges from "../../assets/portfolio.png";
import { Toggle1, Toggle2, Toggle3, Toggle4 } from "../toggle/toggle";

const Project = () => {
  const [ProjectAnimation, setProjectAnimation] = useState<boolean>(false);
  const [ModalPort, setModalPortOpen] = useState<boolean>(false);
  const [ModalStock, setModalStockOpen] = useState<boolean>(false);
  const [ModalAnimation, setModalAnimation] = useState<boolean>(false);

  useEffect(() => {
    setProjectAnimation(true);
  }, []);

  const handleModalStockClick = () => {
    setModalStockOpen(!ModalStock);
    setTimeout(() => {
      setModalAnimation(!ModalAnimation);
    }, 100);
  };

  const handleModalPortClick = () => {
    setModalPortOpen(!ModalPort);
    setTimeout(() => {
      setModalAnimation(!ModalAnimation);
    }, 100);
  };

  return (
    <ProjectWrapper>
      <ProjectContainer ProjectAnimation={ProjectAnimation}>
        <ProjectListContainer>
          <ProjectList>
            <div style={{ display: "flex", width: "100%" }}>
              <StockHolm>
                <StockHolmModal onClick={handleModalStockClick}>
                  <StockHolmLogoImg src={StockHolmLogo} />
                  <WebIMG src={StockHolmIamges} />

                  <ModalOpenButton onClick={handleModalStockClick}>
                    자세히보기
                  </ModalOpenButton>
                </StockHolmModal>
                <Toggle1 />
                <Toggle2 />
              </StockHolm>
              <PortFolio>
                <PortFolioModal>
                  <p>PortFolio</p>
                  <WebIMG
                    src={PortFolioIamges}
                    onClick={handleModalPortClick}
                  />
                  <ModalOpenButton onClick={handleModalPortClick}>
                    Open
                  </ModalOpenButton>
                </PortFolioModal>
                <Toggle3 />
                <Toggle4 />
              </PortFolio>
            </div>
          </ProjectList>
        </ProjectListContainer>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default Project;
const ProjectWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProjectContainer = styled.div<{ ProjectAnimation: boolean }>`
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  position: relative;
  opacity: 0;
  height: 100%;
  transform: translateY(20px);
  transition: all 1s;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.ProjectAnimation &&
    `
  opacity:1;
  transform:translateY(0px);
  padding-bottom:5%;

  
  `}
`;
const ProjectListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
const StockHolmLogoImg = styled.img`
  width: 65%;
`;
const WebIMG = styled.img`
  over-fit: contain;
  width: 100%;
  height: 200px;
`;

const PortFolioModal = styled.div`
  cursor: pointer;
  width: 100%;
  p {
    color: #333;
    font-size: 30px;
    font-weight: 900;
    font-family: "IBM Plex Sans KR", sans-serif;
  }

  &:hover {
    & > div {
      transition: all 0.4s;

      background-color: #fafad2;
      cursor: pointer;
    }
  }
`;
const ProjectList = styled.div`
  margin: 0 auto;
`;
const StockHolm = styled.div`
  background-color: #fff;
  text-align: center;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px;
  margin-left: 10%;
  margin-top: 10px;

  width: 100%;
  &:hover {
    outline: 1px solid#fafad2;
  }
`;
const StockHolmModal = styled.div`
  cursor: pointer;
  width: 100%;

  &:hover {
    & > div {
      transition: all 0.4s;

      background-color: #fafad2;
      cursor: pointer;
    }
  }
`;

const PortFolio = styled.div`
  background-color: #fff;
  text-align: center;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px;
  margin-left: 10%;
  margin-top: 10px;

  width: 100%;
  &:hover {
    outline: 1px solid #fafad2;
  }
`;
const ModalOpenButton = styled.div`
  border-top: 1px solid#c3c3c3;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  margin: 0 auto;
  &:hover {
    transition: all 0.4s;
    background-color: #fafad2;
    cursor: pointer;
  }
`;
