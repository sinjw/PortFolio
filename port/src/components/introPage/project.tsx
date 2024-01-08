import styled from "styled-components";
import { useState, useEffect } from "react";
import { StockHolmView } from "./detailview/stockholmdetail";
import { PortFolioView } from "./detailview/portfoliodetail";
import StockHolmIamges from "../../assets/stockholm.png";
import PortFolioIamges from "../../assets/portfolio.png";
import { Toggle1, Toggle2, Toggle3, Toggle4 } from "../toggle/toggle";

const Project = () => {
  const [ProjectAnimation, setProjectAnimation] = useState<boolean>(false);
  const [DetailViewPort, setDetailViewPort] = useState<boolean>(false);
  const [DetailViewStock, setDetailViewStock] = useState<boolean>(true);
  const [Animation, setAnimation] = useState<boolean>(true);
  const [AnimationPort, setAnimationPort] = useState<boolean>(false);

  useEffect(() => {
    setProjectAnimation(true);
  }, []);

  const handleClick = (e: number) => {
    if (e === 1) {
      setDetailViewStock(true);
      setTimeout(() => {
        setAnimation(true);
      }, 100);
    } else {
      setDetailViewStock(false);
      setAnimation(false);
    }
    if (e === 2) {
      setDetailViewPort(true);
      setTimeout(() => {
        setAnimationPort(true);
      }, 100);
    } else {
      setDetailViewPort(false);
      setAnimationPort(false);
    }
  };

  return (
    <ProjectWrapper>
      <ProjectContainer ProjectAnimation={ProjectAnimation}>
        <ProjectListContainer>
          <ProjectList>
            <StockHolm onClick={() => handleClick(1)}>
              <WebIMG src={StockHolmIamges} />
            </StockHolm>
            <Toggle1 />
            <Toggle2 />
          </ProjectList>
          <ProjectList>
            <PortFolio>
              <WebIMG src={PortFolioIamges} onClick={() => handleClick(2)} />
            </PortFolio>
            <Toggle3 />
            <Toggle4 />
          </ProjectList>
        </ProjectListContainer>
        <DetailViewContainer>
          <Line>DetailView</Line>
          <StockHolmView
            DetailViewStock={DetailViewStock}
            Animation={Animation}
          />
          <PortFolioView
            DetailViewPort={DetailViewPort}
            AnimationPort={AnimationPort}
          />
        </DetailViewContainer>
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
const Line = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 30px;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    border-bottom: 1px solid#c3c3c3;
  }
`;
const ProjectContainer = styled.div<{ ProjectAnimation: boolean }>`
  width: 90%;
  position: relative;
  opacity: 0;
  margin: 0 auto;

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
  flex-direction: row;
  justify-content: center;
  height: 400px;
`;

const WebIMG = styled.img`
  over-fit: contain;
  width: 90%;
`;

const ProjectList = styled.div`
  display: flex;
  transition: all.4s;

  &:hover {
    background-color: #f3f3f3;

    img {
      transition: all 0.4s;
      transform: scale(1.1, 1.1);
    }
  }
  flex-direction: column;
  margin-right: 20px;
  margin-top: 20px;
  background-color: #fff;
  text-align: center;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px;

  width: 330px;
  height: 344px;

  &:hover {
  }
`;

const StockHolm = styled.div`
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  &:hover {
    & > div {
      transition: all 0.4s;

      cursor: pointer;
    }
  }
`;
const PortFolio = styled.div`
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;

  &:hover {
    & > div {
      transition: all 0.4s;

      cursor: pointer;
    }
  }
`;
const DetailViewContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  margin: 0 auto;
  margin-top: 20px;
`;
