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
          <div>Front-end</div>
          <StyledLinkContainer>
            <StyledLink
              to="/"
              onClick={() => {
                handleTabStyle(1);
              }}
              className={`tab ${
                activeTab === 1 ? "active-tab" : "inactive-tab"
              }`}
            >
              <p>About</p>
            </StyledLink>

            <StyledLink
              onClick={() => {
                handleTabStyle(3);
              }}
              className={`tab ${
                activeTab === 3 ? "active-tab" : "inactive-tab"
              }`}
              to="/project"
            >
              <p>ProJect</p>
            </StyledLink>
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
  background-color: #f3f3f3;
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 1;

  justify-content: space-around;
  align-items: center;

  & > div {
    font-size: 20px;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 900;
  }
`;
// const TabStyle = styled.div``;
const StyledLinkContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: -10px;
  position: relative;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 900;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;

  &.active-tab {
    color: black;
  }
  &.inactive-tab {
    color: #999;
  }
`;

export default Intro;
