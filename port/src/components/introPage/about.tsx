import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import ProFile from "../../assets/ProfileImage.png";
import ProFileBackground from "../../assets/ProfileBackground.png";
import ProFileBackground2 from "../../assets/ProfileBackground2.png";
import axioslogo from "../../assets/axios.png";
import csslogo from "../../assets/css.png";
import echartlogo from "../../assets/echart.png";
import figmalogo from "../../assets/figma.png";
import githublogo from "../../assets/github.png";
import htmllogo from "../../assets/html.png";
import javascriptlogo from "../../assets/javascript.png";
import postmanlogo from "../../assets/postman.png";
import pythonlogo from "../../assets/python.png";
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

  return (
    <>
      <AboutMeContainer showContent={showContent}>
        <SectionTitle>About Me</SectionTitle>
        <ButtonContainer>
          <ChangeButton buttonclick={buttonClick} onClick={handleButtonClick}>
            <p>{buttonClick ? "Profile" : "Skill"}</p>
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
          <Skills>
            <Skill1>
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
            </Skill1>
            <Skill2>
              <Skill1Ptag>어느정도 다룰 줄 알아요</Skill1Ptag>
              <LogoContainer>
                <Logobox>
                  <SkillImage src={axioslogo} />
                </Logobox>

                <Logobox>
                  <SkillImage src={echartlogo} />
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
            </Skill2>
            <Skill3>
              <Skill1Ptag>사용해 본적있어요</Skill1Ptag>
              <LogoContainer>
                <Logobox>
                  <SkillImage src={pythonlogo} /> <span>Python</span>{" "}
                </Logobox>
                <Logobox>
                  <SkillImage src={reactlogo} /> <span>ReactNative</span>{" "}
                </Logobox>
              </LogoContainer>
            </Skill3>
          </Skills>
        </SkillContainer>
        <Career />
      </AboutMeContainer>
    </>
  );
};

export default About;
const AboutMeContainer = styled.div<{ showContent: boolean }>`
  opacity: 0;
  transform: translateY(30px);
  height: 800px;
  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: translateY(0px);
      transition: all 1.2s;
    `};
`;
const SectionTitle = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 40px;
  margin-bottom: 40px;
`;
const ButtonContainer = styled.div`
  width: 100%;
`;
const ChangeButton = styled.button<{ buttonclick: boolean }>`
  width: 150px;
  height: 60px;
  border-radius: 50px 50px;
  border: 1px solid#c3c3c3;
  position: relative;
  margin-left: 45%;
  transform: translate(-50px -50px);
  p {
    text-align: right;
    font-size: 20px;
    margin-right: 20px;
  }
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    background-color: black;
    top: 5px;
    border-radius: 50% 50%;
    transition: all 0.4s;
  }

  ${(props) =>
    props.buttonclick &&
    css`
      &::after {
        transform: translateX(85px);
        transition: all 0.4s;
      }
      p {
        text-align: left;
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
    width: 90%;
    height: 430px;
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
    width: 90%;
    color: white;
    height: 450px;
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

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  height: 80%;
  justify-content: space-around;
  p {
    font-size: 20px;
    font-family: "IBM Plex Sans KR", sans-serif;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 25%;
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
  p {
    font-size: 20px;
    margin-left: 8px;
  }
`;
const SkillImage = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 15px;
`;
const Skill1 = styled.div`
  height: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30%;

  border-radius: 20px 20px;
  border-top: 1px solid#666;
  border-left: 1px solid#666;
  border-right: 2px solid#ececec;
  border-bottom: 2px solid#ececec;
`;
const Skill1Ptag = styled.p`
  height: 50px;
  margin-top: 20px;
`;
const Skill2 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 320px;

  border-radius: 20px 20px;
  border-top: 1px solid#666;
  border-left: 1px solid#666;
  border-right: 2px solid#ececec;
  border-bottom: 2px solid#ececec;
`;
const Skill3 = styled.div`
  text-align: center;
  width: 30%;
  height: 320px;
  border-top: 1px solid#666;
  border-left: 1px solid#666;
  border-right: 2px solid#ececec;
  border-bottom: 2px solid#ececec;
  border-radius: 20px 20px;
`;
const ProfileContent = styled.div`
  display: flex;
  align-items: center;
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
`;
const Profilebirth = styled.p`
  font-size: 22px;
  font-family: "IBM Plex Sans KR", sans-serif;
`;
const ProFileImg = styled.img`
  width: 160px;
  height: 160px;
  filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.6));
`;
const ProFileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const AboutText = styled.div`
  margin-top: 5%;
  width: 60%;
  p {
    font-size: 25px;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 400;
    margin-bottom: 50px;
    line-height: 40px;
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
  }
`;
