import { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import ProFile from "../../assets/ProfileImage.png";
const About = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const [showContent, setShowcontent] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      if (isClicked) {
        setShowcontent(true);
      }
    }, 300);
  }, [isClicked]);

  return (
    <>
      <div style={{ marginTop: "160px" }}>About me</div>

      <AboutContainer showContent={showContent}>
        <ProfileContent>
          <ProFileImg src={ProFile} />
          <ProFileText>
            <ProfileName>신중원</ProfileName>
            <Profilebirth>1994.11.08</Profilebirth>
            <ProfileTag>front-end</ProfileTag>
          </ProFileText>
        </ProfileContent>

        <AboutText>
          <p>
            <span>문득 생각이나는 아이디어들을</span> 배운 기술로 구현해내고
            고민하는 과정을 좋아합니다. <br />
            처음 시작이 완벽하진 않더라도 시간이흐르면서 완벽 그이상으로 성장 할
            수 있는 개발자가 되려고 노력하는 중 입니다.
          </p>
          <p>
            <span>“기회는 준비된사람이 잡는다” </span>제가 가장 좋아하는 명언
            입니다.
            <br /> 기회가 왔을때 그 기회를 잡을 수 있도록 준비되어 있는 사람이
            되기위해 준비하고 쌓아가려고 항상 노력하고 있습니다.
            <br /> 그것을 기반으로 일을할때에 맡은바를 완벽하게 해 낼 수
            있는사람이 되겠습니다.
          </p>
        </AboutText>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div<{ showContent: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  border-radius: 10px 10px;
  position: relative;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transition: all 1.2s;
    `};
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
  margin-top: 5px;
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
    font-family: "Nanum Myeongjo", serif;
    font-weight: 400;
    margin-bottom: 50px;
    line-height: 40px;

    span {
      font-weight: 900;
      border-bottom: 1px solid#333;
    }
    span::after {
      content: "";
      height: 3px;
      width: 100%;

      border-bottom: 2px solid#333;
    }
  }
`;
