import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const [activeTab, setactiveTab] = useState<number>(1);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // 감지가 한 번만 발생하도록 설정
    threshold: 1, // 요소가 화면의 50% 이상이 보일 때 감지
  });

  useEffect(() => {
    if (inView) {
      console.log("하단 부분이 보입니다!");

      setScrolling(true);
    }
  }, [inView]);
  const handleTabStyle = (number: number) => {
    setactiveTab(number);
  };

  return (
    <IntroConatiner>
      <Router>
        <Navigate className={scrolling ? "scrollActive" : "scrollInactive"}>
          <StyledLink
            to="/"
            className={`tab ${activeTab === 1 ? "active-tab" : "inactive-tab"}`}
            onClick={() => {
              handleTabStyle(1);
            }}
          >
            <p>Front-end Developer</p>
          </StyledLink>
          <StyledLinkContainer
            className={`tab ${activeTab === 1 ? "active-tab" : "inactive-tab"}`}
            onClick={() => {
              handleTabStyle(1);
            }}
          >
            <StyledLink to="/">About</StyledLink>
          </StyledLinkContainer>

          <StyledLinkContainer
            className={`tab ${activeTab === 3 ? "active-tab" : "inactive-tab"}`}
            onClick={() => {
              handleTabStyle(3);
            }}
          >
            <StyledLink to="/project">Project</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer
            className={`tab ${activeTab === 4 ? "active-tab" : "inactive-tab"}`}
            onClick={() => {
              handleTabStyle(4);
            }}
          >
            <StyledLink to="/contact">Contact</StyledLink>
          </StyledLinkContainer>
        </Navigate>
        <ObserveContainer>
          <Observe ref={ref}></Observe>
        </ObserveContainer>

        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </IntroConatiner>
  );
};
const IntroConatiner = styled.div`
  width: 100%;
  height: 1900px;
`;

const Navigate = styled.div`
  background-color: #333;
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 1;

  justify-content: space-around;
  align-items: center;
`;

const StyledLinkContainer = styled.div`
  position: relative;
  &.active-tab {
    &::after {
      content: "";
      width: 100%;
      border-bottom: 3px solid#fff;
      height: 3px;
      display: block;

      transition: all.3s;
    }
  }
  &.inactive-tab {
    &::after {
      content: "";
      width: 0%;
      border-bottom: 3px solid#fff;
      height: 3px;
      display: block;

      transition: all.3s;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

const ObserveContainer = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
`;
const Observe = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
`;

export default Intro;
