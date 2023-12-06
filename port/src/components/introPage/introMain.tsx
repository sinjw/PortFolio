import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Project from "./project";
import { useState } from "react";

const Intro = () => {
  const [activeTab, setactiveTab] = useState<number>(1);

  const handleTabStyle = (number: number) => {
    setactiveTab(number);
  };

  return (
    <IntroConatiner>
      <Router>
        <Navigate>
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

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </IntroConatiner>
  );
};
const IntroConatiner = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    max-width: 500px;
  }
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

export default Intro;
