import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ezen from "../../assets/ezenlogo.png";
import CodeStates from "../../assets/codestatesLogo.jpg";
const Career = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrolling2, setScrolling2] = useState<boolean>(false);
  const [scrolling3, setScrolling3] = useState<boolean>(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      console.log("하단 부분이 보입니다!");

      setScrolling(true);
      setTimeout(() => {
        setScrolling2(true);
        console.log(scrolling2);
      }, 500);
      setTimeout(() => {
        setScrolling3(true);
        console.log(scrolling2);
      }, 1000);
    }
  }, [inView]);

  return (
    <CareerContainer ref={ref}>
      <ExperienceContainer>
        <p>Experience</p>
        <CardContainer>
          <Card1 scrolling={scrolling}>
            <CompanyName>
              <CompanyLogo src={ezen} />
              <span>EZEN ACADEMY</span>
            </CompanyName>

            <CardContent>
              <span>코딩을 활용한 웹디자인 과정 수료</span>
              <span>2021.2~2021.8</span>
            </CardContent>
            <CardContentBottomText>
              <span>
                코딩에 대한 흥미를 갖고 도전해 보기위해 웹디자인 과정으로
                시작하였습니다
              </span>
            </CardContentBottomText>
          </Card1>
          <Card2 scrolling2={scrolling2}>
            <CompanyName>
              <CompanyLogo src={ezen} />
              <span>EZEN ACADEMY</span>
            </CompanyName>
            <CardContent>
              <span>사원으로 근무</span>
              <span>2021.8~2022.3</span>
            </CardContent>
            <CardContentBottomText>
              <span>
                웹디자인 과정 수료직후 학원에서 8개월간 근무하였고 CAFE24를통한
                온라인 결제용 홈페이지도 제작 하였습니다
              </span>
            </CardContentBottomText>
          </Card2>
          <Card3 scrolling3={scrolling3}>
            <CompanyName>
              <CompanyLogo src={CodeStates} />
              <span>CodeStates</span>
            </CompanyName>
            <CardContent>
              <span>Front-end 부트캠프 45기 수료</span>
              <span>2023.04~2023.10</span>
            </CardContent>

            <CardContentBottomText>
              <span>본격적으로 개발공부를 하고싶어서 시작하게 되었습니다</span>
            </CardContentBottomText>
          </Card3>
        </CardContainer>
      </ExperienceContainer>
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  margin: 0 auto;
  margin-top: 200px;
  height: 800px;
`;
const ExperienceContainer = styled.div`
  position: relative;
  & > p {
    font-family: "Black Han Sans", sans-serif;
    display: flex;
    margin-left: 10%;
    font-size: 38px;
    color: #333;
    &::after {
      content: "";
      width: 200px;
      border-bottom: 3px solid#333;
      display: block;
      margin-left: 20px;
      height: 25px;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 450px;
  margin: 0 auto;
  margin-top: 40px;

  & > div {
  }
`;
const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px 15px;
  margin-right: 5px;
`;
const CompanyName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  span {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 600;
    color: #444;
  }
`;
const CardContent = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    height: 4px;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    width: 50%;
    margin: 0 auto;
    padding-top: 40px;
  }
`;
const CardContentBottomText = styled.div`
  width: 80%;
`;
const Card1 = styled.div<{ scrolling: boolean }>`
  background-color: white;
  font-family: "IBM Plex Sans KR", sans-serif;
  width: 300px;
  margin-top: 40px;
  height: 400px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px 10px;
  transform: translateY(-20px);
  transition: all.4s;
  opacity: 0;
  &:hover {
    outline: 1px solid#1AAFBC;
  }
  ${(props) =>
    props.scrolling &&
    css`
      transition: all.4s;
      transform: translateY(0px);
      opacity: 1;
    `}
`;
const Card2 = styled.div<{ scrolling2: boolean }>`
  background-color: white;
  font-family: "IBM Plex Sans KR", sans-serif;
  width: 300px;
  margin-top: 40px;
  height: 400px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px 10px;
  transform: translateY(-20px);
  transition: all.4s;
  opacity: 0;
  &:hover {
    outline: 1px solid#1AAFBC;
  }
  ${(props) =>
    props.scrolling2 &&
    css`
      transition: all.6s;
      transform: translateY(0px);
      opacity: 1;
    `}
`;
const Card3 = styled.div<{ scrolling3: boolean }>`
  background-color: white;
  font-family: "IBM Plex Sans KR", sans-serif;
  width: 300px;
  margin-top: 40px;
  height: 400px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px 10px;
  transform: translateY(-20px);
  transition: all.6s;
  opacity: 0;
  &:hover {
    outline: 1px solid#1AAFBC;
  }
  ${(props) =>
    props.scrolling3 &&
    css`
      transition: all.6s;
      transform: translateY(0px);
      opacity: 1;
    `}
`;
