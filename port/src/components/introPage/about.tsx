import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import { useInView } from "react-intersection-observer";

import ProFile from "../../assets/ProfileImage.png";
import ProFileBackground from "../../assets/ProfileBackground.png";
import ProFileBackground2 from "../../assets/ProfileBackground2.png";
import axioslogo from "../../assets/axios.png";
import csslogo from "../../assets/css.png";
import figmalogo from "../../assets/figma.png";
import githublogo from "../../assets/github.png";
import htmllogo from "../../assets/html.png";
import javascriptlogo from "../../assets/javascript.png";
import postmanlogo from "../../assets/postman.png";

import reactlogo from "../../assets/react.png";
import reduxlogo from "../../assets/redux.png";
import sasslogo from "../../assets/sass.png";
import typescriptlogo from "../../assets/typescript.png";
import styledComponentlogo from "../../assets/styled-component.png";
import Career from "./career";
const About = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const [showContent, setShowcontent] = useState<boolean>(false);
  const [buttonClick, setButtonClick] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  useEffect(() => {
    setTimeout(() => {
      if (isClicked) {
        setShowcontent(true);
      }
    }, 300);
  }, [isClicked]);

  const handleButtonClick = () => {
    setButtonClick(!buttonClick);
  };

  useEffect(() => {
    if (inView) {
      console.log("하단 부분이 보입니다!");
      setScrolling(true);
    }
  }, [inView]);

  return (
    <AboutWrapper>
      <AboutMeContainer showContent={showContent}>
        <SectionTitle>About Me</SectionTitle>
        <ButtonContainer>
          <ChangeButton buttonclick={buttonClick} onClick={handleButtonClick}>
            <div>
              <p>Profile</p>
              <p>Skill</p>
            </div>
          </ChangeButton>
        </ButtonContainer>

        <ProfileContainer
          className={buttonClick ? "inactiveProfile " : "activeProfile"}
        >
          <ProfileContent>
            <ProFileImg src={ProFile} />
            <ProFileText>
              <ProfileName>신중원</ProfileName>
              <Profilebirth>1994.11.08</Profilebirth>
              <ProfileTag>Front-end</ProfileTag>
            </ProFileText>
          </ProfileContent>

          <AboutText>
            <p>
              <span>문득 생각이나는 아이디어들을</span> 배운 기술로 구현해내고
              고민하는 과정을 좋아합니다. <br />
              처음 시작이 완벽하진 않더라도 시간이흐르면서 완벽 그이상으로 성장
              할 수 있는 개발자가 되려고 노력하는 중 입니다.
            </p>
            <p>
              <span>“기회는 준비된사람이 잡는다” </span>제가 가장 좋아하는 명언
              입니다.
              <br /> 기회가 왔을때 그 기회를 잡을 수 있도록 준비되어 있는 사람이
              되기위해 준비하고 쌓아가려고 항상 노력하고 있습니다.
            </p>
          </AboutText>
        </ProfileContainer>
        <SkillContainer
          className={buttonClick ? "activeSkill" : "inactiveSkill"}
        >
          <h1>Skill</h1>
          <Skill>
            <Skills>
              <Skill1Ptag>주로 사용했어요</Skill1Ptag>
              <LogoContainer>
                <Logobox>
                  <SkillImage src={htmllogo} />
                  <span>HTML5</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={csslogo} /> <span>CSS3</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={javascriptlogo} /> <span>JavaScript</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={reactlogo} /> <span>React</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={sasslogo} />
                  <span>SASS</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={styledComponentlogo} />
                  <span>Styled-Component</span>
                </Logobox>
              </LogoContainer>
            </Skills>
            <Skills>
              <Skill1Ptag>조금은 다룰 줄 알아요</Skill1Ptag>
              <LogoContainer>
                <Logobox>
                  <SkillImage src={axioslogo} />
                  <span>Axios</span>
                </Logobox>

                <Logobox>
                  <SkillImage src={figmalogo} />
                  <span>Figma</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={githublogo} />
                  <span>Github</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={reduxlogo} /> <span>Redux/toolkit</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={postmanlogo} />
                  <span>Postman</span>
                </Logobox>
                <Logobox>
                  <SkillImage src={typescriptlogo} />
                  <span>TypeScript</span>
                </Logobox>
              </LogoContainer>
            </Skills>
            <Skills>
              <Skill1Ptag>한번쯤 사용해 봤어요</Skill1Ptag>
              <LogoContainer>
                <Logobox>
                  <SkillImage src={reactlogo} /> <span>ReactNative</span>
                </Logobox>
              </LogoContainer>
            </Skills>
          </Skill>
        </SkillContainer>
        <ScrollDown scrolling={scrolling}>
          Scroll
          <br /> &darr;
        </ScrollDown>
        <Observe ref={ref}></Observe>
        <Career />
      </AboutMeContainer>
    </AboutWrapper>
  );
};

export default About;
const Observe = styled.div`
  position: absolute;
  bottom: 40%;
  width: 100%;
  height: 5px;
  display: block;
`;
const Scrolls = keyframes`
from {
  transform:translateY(0px);

}
to{
  transform:translateY(20px);
  opacity:0;

}

`;
const ScrollDown = styled.div<{ scrolling: boolean }>`
  text-align: center;
  margin-top: 40px;
  opacity: 0.4;
  animation: ${Scrolls} 2.2s ease infinite;

  ${(props) =>
    props.scrolling &&
    css`
      opacity: 0;
    `}
`;
const AboutWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
const AboutMeContainer = styled.div<{ showContent: boolean }>`
  opacity: 0;
  transform: translateY(30px);

  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: translateY(0px);
      transition: all 1s;
    `};
  @media (max-width: 500px) {
    max-width: 500px;
  }
`;
const SectionTitle = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 40px;
  margin-bottom: 40px;
  font-family: "Black Han Sans", sans-serif;
  color: #333;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 70px;
  @media (max-width: 500px) {
    max-width: 500px;
  }
`;
const ChangeButton = styled.button<{ buttonclick: boolean }>`
  width: 250px;
  height: 60px;
  margin-top: 5px;
  border-radius: 10px 10px;
  border: none;

  position: relative;
  margin-left: 43%;
  transform: translate(-50px -50px);
  background-color: #dfdfdf;
  cursor: pointer;

  align-items: center;
  & > div {
    display: flex;
    justify-content: space-around;
  }
  p {
    font-size: 20px;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 900;

    color: #333;
    z-index: 3;
  }
  &::after {
    content: "";
    width: 50%;
    height: 50px;
    display: block;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    top: 5px;
    border-radius: 10px 10px;
    transition: all 0.4s;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 500px) {
    max-width: 500px;
    left: -17%;
  }

  ${(props) =>
    props.buttonclick &&
    css`
      &::after {
        transform: translateX(115px);
        transition: all 0.4s;
      }
    `}
`;

const fadeIn = keyframes`
from {
  opacity: 0;
  transform:translateY(-10px)
  
}
to {
  opacity: 1;
  transform:translateY(0)
}
`;

const ProfileContainer = styled.div`
  &.activeProfile {
    width: 75%;
    height: 400px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-size: contain;

    background-image: url(${ProFileBackground});

    background-position: center;
    transition: all 0.4s;
    border-radius: 10px 10px;
    position: relative;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 1s ease-in-out;
  }

  &.inactiveProfile {
    display: none;
  }
`;
const SkillContainer = styled.div`
  &.activeSkill {
    width: 75%;
    color: white;
    height: 420px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: contain;
    background-image: url(${ProFileBackground2});
    background-position: center;
    transition: all 0.4s;
    border-radius: 10px 10px;
    position: relative;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 1s ease-in-out;
  }

  &.inactiveSkill {
    display: none;
  }
  h1 {
    font-family: "IBM Plex Sans KR", sans-serif;
    margin-top: 20px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  height: 80%;
  justify-content: space-around;
  p {
    font-size: 18px;
    font-family: "IBM Plex Sans KR", sans-serif;
  }
  @media (max-width: 500px) {
    p {
      font-size: 13px;
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 15%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Logobox = styled.div`
  padding-right: 18px;
  margin-right: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  color: black;
  background-color: #fff;
  border-radius: 20px 20px;

  height: 30px;
  &:hover {
    background-color: #ccc;
  }
  span {
    font-size: 13px;
    margin-left: 8px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;
const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;
const Skills = styled.div`
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 20px 20px;
  border: 1px solid#666;
`;
const Skill1Ptag = styled.p`
  height: 30px;
  margin-top: 20px;
`;

const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 100px;
    margin-left: -30px;
  }
`;
const ProfileTag = styled.p`
  border: 1px solid#333;
  text-align: center;
  background-color: #333;
  border-radius: 40px 40px;
  color: white;
  margin-top: 10px;
`;
const ProfileName = styled.p`
  font-size: 32px;
  font-family: "IBM Plex Sans KR", sans-serif;
  @media (max-width: 500px) {
    max-width: 500px;
    font-size: 20px;
  }
`;
const Profilebirth = styled.p`
  font-size: 22px;
  font-family: "IBM Plex Sans KR", sans-serif;
  @media (max-width: 500px) {
    max-width: 500px;
    font-size: 15px;
  }
`;
const ProFileImg = styled.img`
  width: 160px;
  height: 160px;
  filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.6));
  @media (max-width: 500px) {
    max-width: 500px;

    width: 70px;
    height: 70px;
  }
`;
const ProFileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const AboutText = styled.div`
  margin-top: 5%;
  width: 60%;
  p {
    font-size: 20px;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 400;
    margin-bottom: 50px;
    line-height: 35px;
    color: #535353;

    span {
      font-weight: 900;
      border-bottom: 1px solid#333;
      color: #444;
    }
    span::after {
      content: "";
      height: 3px;
      width: 100%;

      border-bottom: 2px solid#333;
    }
    @media (max-width: 500px) {
      max-width: 300px;
      font-size: 15px;
      line-height: 23px;
      margin-top: 40px;
    }
  }
`;
