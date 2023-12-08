import styled from "styled-components";
import { useState, useEffect } from "react";
import Modal from "./modal";
import StockHolmLogo from "../../assets/stockholmLogo.png";
import ToggleImg from "../../assets/toggle.png";
import StockHolmIamges from "../../assets/stockholm.png";
import PortFolioIamges from "../../assets/portfolio.png";
const Project = () => {
  const [ProjectAnimation, setProjectAnimation] = useState<boolean>(false);
  const [ModalPort, setModalPortOpen] = useState<boolean>(false);
  const [ModalStock, setModalStockOpen] = useState<boolean>(false);
  const [ModalAnimation, setModalAnimation] = useState<boolean>(false);
  const [toggles1, setToggles1] = useState<boolean>(false);
  const [toggles2, setToggles2] = useState<boolean>(false);
  const [toggles3, setToggles3] = useState<boolean>(false);
  const [toggles4, setToggles4] = useState<boolean>(false);

  useEffect(() => {
    setProjectAnimation(true);
  }, []);

  const handleToggleClick = (e: string) => {
    if (e === "1") {
      setToggles1(!toggles1);
    } else if (e === "2") {
      setToggles2(!toggles2);
    } else if (e === "3") {
      setToggles3(!toggles3);
    } else if (e === "4") {
      setToggles4(!toggles4);
    }
  };

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
    <ProjectContainer ProjectAnimation={ProjectAnimation}>
      <StockHolmContainer>
        <LeftContentWrapper>
          <StockHolm>
            <StockHolmModal onClick={handleModalStockClick}>
              <StockHolmLogoImg src={StockHolmLogo} />
              <WebIMG src={StockHolmIamges} />

              <ModalOpenButton onClick={handleModalStockClick}>
                자세히보기
              </ModalOpenButton>
            </StockHolmModal>
          </StockHolm>
          <LeftText>
            <LeftTextPtag>
              <span>StockHolm</span>

              <ProjectName>TeamProject</ProjectName>
            </LeftTextPtag>
            <LeftTextPtag>
              <ToggleTitle>
                <ToggleContainer
                  toggles={toggles1}
                  onClick={() => handleToggleClick("1")}
                >
                  <Toggle
                    onClick={() => handleToggleClick("1")}
                    toggles={toggles1}
                  ></Toggle>
                </ToggleContainer>
                <div>배포링크</div>
              </ToggleTitle>

              <ToggleContentContainer>
                <ToggleContent
                  target="_blank"
                  href=" http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/"
                  toggles={toggles1}
                >
                  http://seb008stockholm.s3-website.ap-nort <br />
                  heast-2.amazonaws.com/
                </ToggleContent>
              </ToggleContentContainer>
            </LeftTextPtag>
            <ToggleTitle>
              <ToggleContainer2
                toggles={toggles2}
                onClick={() => handleToggleClick("2")}
              >
                <Toggle2
                  toggles={toggles2}
                  onClick={() => handleToggleClick("2")}
                ></Toggle2>
              </ToggleContainer2>

              <LeftTextPtag>리포지토리</LeftTextPtag>
            </ToggleTitle>
            <ToggleContentContainer2>
              <ToggleContent2
                href="https://github.com/sinjw/seb45_main_008"
                target="blank"
                toggles={toggles2}
              >
                https://github.com/sinjw/seb45_main_008
              </ToggleContent2>
            </ToggleContentContainer2>
          </LeftText>
        </LeftContentWrapper>
        <PorjectTextContainer>
          <ProjectIntro>
            <h3>프로젝트 소개</h3>
            <p>
              StockHolm은 스웨덴의 수도의 이름을 이용해서 모의 주식 사이트를
              주식(Stock) + 섬(Holm)이라는 의미를 가지도록 표현한 이름입니다
            </p>
            <p>
              모의 주식 투자를 목적으로 만들어진 사이트이며 주식시장의 Open
              API를 활용해서 주식정보를 받아와 차트로 그려내었습니다
            </p>
            <p>
              또한 단일 페이지로 이루어져있고 한페이지 안에서 여러가지 기능들을
              수행 할 수 있도록 만들었습니다 .
            </p>
          </ProjectIntro>
          <ProJectReview>
            <h3>프로젝트 후기</h3>

            <p>
              처음 계획 했던것들에 비해서 모든 기능들을 구현하기에는 시간이
              부족했고 이로인해서 개발 기간을 조금 더 보수적으로 잡아야 좋다는
              것을 깨닫게 되었습니다
            </p>
            <p>
              제가 맡아서 작업했던 부분은 오른쪽파트의 탭기능을 활용한
              기능구현파트를 맡았습니다 작업을 진행하면서 프로젝트 시작전에
              미숙했던 서버와의 통신부분에 대해서 조금더 이해도를 갖게
              되었습니다.
            </p>
            <p>
              아쉬웠던 점은 디자인 적인 부분과 처음생각했던 기능들을 전부
              구현해내지 못한게 아쉬웠습니다.
            </p>
          </ProJectReview>
        </PorjectTextContainer>
      </StockHolmContainer>
      <PortFolioContainer>
        <LeftContentWrapper>
          <PortFolio>
            <PortFolioModal>
              <StockHolmLogoImg src={StockHolmLogo} />
              <WebIMG src={PortFolioIamges} />
              <ModalOpenButton onClick={handleModalPortClick}>
                Open
              </ModalOpenButton>
            </PortFolioModal>
          </PortFolio>

          <LeftText>
            <LeftTextPtag>
              <span>PortFolio</span>

              <ProjectName>SoloProject</ProjectName>
            </LeftTextPtag>
            <LeftTextPtag>
              <ToggleTitle>
                <ToggleContainer3 toggles={toggles3}>
                  <Toggle3
                    toggles={toggles3}
                    onClick={() => handleToggleClick("3")}
                  ></Toggle3>
                </ToggleContainer3>
                배포링크
              </ToggleTitle>
            </LeftTextPtag>

            <LeftTextPtag>
              <ToggleContentContainer>
                <ToggleContent3
                  href="http://joogwonportfolio.s3-website.ap-northeast-2.amazonaws.com"
                  target="blank"
                  toggles={toggles3}
                >
                  http://joogwonportfolio.s3-website.ap-northeast
                  <br />
                  -2.amazonaws.com
                </ToggleContent3>
              </ToggleContentContainer>
            </LeftTextPtag>
            <LeftTextPtag>
              <ToggleTitle>
                <ToggleContainer4 toggles={toggles4}>
                  <Toggle4
                    toggles={toggles4}
                    onClick={() => handleToggleClick("4")}
                  ></Toggle4>
                </ToggleContainer4>
                Git hub
              </ToggleTitle>
            </LeftTextPtag>
            <ToggleContent4
              href="https://github.com/sinjw/PortFolio"
              target="blank"
              toggles={toggles4}
            >
              <p>https://github.com/sinjw/PortFolio</p>
            </ToggleContent4>
          </LeftText>
        </LeftContentWrapper>
        <PorjectTextContainer>
          <ProjectIntro>
            <h3>프로젝트 소개</h3>
            <p>
              저만의 개인 포트폴리오를 한번쯤 제작하고 싶어서 만들게 되었습니다
            </p>
            <p>코드를 중간중간 저장하기위한용도로 git hub을 사용 하였습니다</p>
            <p>라우터를 이용해서 3개의 페이지로 구성하였습니다.</p>
          </ProjectIntro>
          <ProJectReview>
            <h3>프로젝트 후기</h3>

            <p>
              처음 계획 했던것들에 비해서 모든 기능들을 구현하기에는 시간이
              부족했고 이로인해서 개발 기간을 조금 더 보수적으로 잡아야 좋다는
              것을 깨닫게 되었습니다
            </p>
            <p>
              제가 맡아서 작업했던 부분은 오른쪽파트의 탭기능을 활용한
              기능구현파트를 맡았습니다 작업을 진행하면서 프로젝트 시작전에
              미숙했던 서버와의 통신부분에 대해서 조금더 이해도를 갖게
              되었습니다.
            </p>
            <p>
              아쉬웠던 점은 디자인 적인 부분과 처음생각했던 기능들을 전부
              구현해내지 못한게 아쉬웠습니다.
            </p>
          </ProJectReview>
        </PorjectTextContainer>
      </PortFolioContainer>
      <Modal
        Title="StockHolm"
        contentStock={
          <div>
            <iframe
              style={{ width: "100%", height: "760px" }}
              src="http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/"
            />
          </div>
        }
        isOpenStock={ModalStock}
        onClose={handleModalStockClick}
        modalanimation={ModalAnimation}
      />
      <Modal
        Title="PortFolio"
        contentStock={
          <div>
            <iframe style={{ width: "100%", height: "760px" }} src="" />
          </div>
        }
        isOpenStock={ModalPort}
        onClose={handleModalPortClick}
        modalanimation={ModalAnimation}
      />
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div<{ ProjectAnimation: boolean }>`
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;

  opacity: 0;
  height: 100%;
  transform: translateY(20px);
  transition: all 1s;
  ${(props) =>
    props.ProjectAnimation &&
    `
  opacity:1;
  transform:translateY(0px);
  padding-bottom:5%;

  
  `}
`;
const StockHolmContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
`;
const StockHolmLogoImg = styled.img`
  width: 65%;
`;
const WebIMG = styled.img`
  over-fit: contain;
  width: 100%;
  height: 200px;
`;

const ProjectName = styled.p`
  font-size: 17px;
  display: inline;
  margin-left: 5px;
`;

const PorjectTextContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ProjectIntro = styled.div`
  width: 100%;
  margin-bottom: 10%;
  h3 {
    font-size: 20px;
  }
`;
const ProJectReview = styled.div`
  width: 100%;
  h3 {
    font-size: 20px;
  }
`;
const LeftText = styled.div`
  text-align: left;
  width: 60%;
  margin-top: 20px;
  margin-left: 10%;
`;

const LeftTextPtag = styled.div`
  font-size: 20px;
  

  span {
    font-size: 30px;
    color: #2e4d4d;
    "Noto Sans KR",sans-serif;
    font-weight:900;
  }
`;

const PortFolioContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 160px;
`;

const PortFolioModal = styled.div`
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
const LeftContentWrapper = styled.div`
  width: 40%;
`;
const StockHolm = styled.div`
  background-color: #fff;
  text-align: center;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px;
  margin-left: 10%;
  margin-top: 10px;

  width: 60%;
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

  width: 60%;
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

const ToggleContainer = styled.div<{ toggles: boolean }>`
  width: 20px;
  text-align: center;
  border-radius: 5px 5px;
  &:hover {
    background-color: #f3f3f3;
  }
`;
const ToggleContainer2 = styled.div<{ toggles: boolean }>`
  width: 20px;
  text-align: center;
  border-radius: 5px 5px;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const ToggleContainer3 = styled.div<{ toggles: boolean }>`
  width: 20px;
  text-align: center;
  border-radius: 5px 5px;
  &:hover {
    background-color: #f3f3f3;
  }
`;
const ToggleContainer4 = styled.div<{ toggles: boolean }>`
  width: 20px;
  text-align: center;
  border-radius: 5px 5px;
  &:hover {
    background-color: #f3f3f3;
  }
`;
const Toggle = styled.div<{ toggles: boolean }>`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin-top: 9px;
  margin-left: 4px;

  background-image: url(${ToggleImg});
  background-positio: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) =>
    props.toggles &&
    `
  transform: rotate(90deg);
  `}
`;

const Toggle2 = styled.div<{ toggles: boolean }>`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin-top: 9px;
  margin-left: 4px;

  background-image: url(${ToggleImg});
  background-positio: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) =>
    props.toggles &&
    `
  transform: rotate(90deg);
  `}
`;
const Toggle3 = styled.div<{ toggles: boolean }>`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin-top: 9px;
  margin-left: 4px;

  background-image: url(${ToggleImg});
  background-positio: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) =>
    props.toggles &&
    `
  transform: rotate(90deg);
  `}
`;
const Toggle4 = styled.div<{ toggles: boolean }>`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin-top: 9px;
  margin-left: 4px;

  background-image: url(${ToggleImg});
  background-positio: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) =>
    props.toggles &&
    `
  transform: rotate(90deg);
  `}
`;
const ToggleTitle = styled.div`
  display: flex;
`;

const ToggleContent = styled.a<{ toggles: boolean }>`
  font-size: 0;
  transition: all.2s;
  text-decoration: none;
  color: green;
  ${(props) =>
    props.toggles &&
    `
   font-size: 13px;
  `}
`;
const ToggleContent2 = styled.a<{ toggles: boolean }>`
  text-decoration: none;

  font-size: 0;
  transition: all.2s;
  text-decoration: none;
  color: green;
  ${(props) =>
    props.toggles &&
    `
  font-size:13px;
 
  
  `}
`;

const ToggleContent3 = styled.a<{ toggles: boolean }>`
  text-decoration: none;

  font-size: 0;
  transition: all.2s;
  text-decoration: none;
  color: green;
  ${(props) =>
    props.toggles &&
    `
  font-size:13px;
 
  
  `}
`;
const ToggleContent4 = styled.a<{ toggles: boolean }>`
  text-decoration: none;

  font-size: 0;
  transition: all.2s;
  text-decoration: none;
  color: green;
  ${(props) =>
    props.toggles &&
    `
  font-size:13px;
 
  
  `}
`;
const ToggleContentContainer = styled.div`
  display: flex;
`;
const ToggleContentContainer2 = styled.div`
  display: flex;
`;
