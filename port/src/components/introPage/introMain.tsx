import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
const Intro = () => {
  return (
    <IntroConatiner>
      <Router>
        <Navigate>
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </Navigate>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </IntroConatiner>
  );
};
export default Intro;
const Navigate = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    margin-left: 20px;
  }
`;
const IntroConatiner = styled.div`
  width: 100%;
`;
