import styled from "styled-components";
import ToggleImg from "../../assets/toggle.png";
import { useState } from "react";

export const Toggle1 = () => {
  const [toggles1, setToggles1] = useState<boolean>(false);
  const handleToggle1 = (e: string) => {
    if (e === "1") {
      setToggles1(!toggles1);
    }
  };
  return (
    <>
      <TogglePtag>
        <span>StockHolm</span>
        <ProjectName>TeamProject</ProjectName>
      </TogglePtag>
      <TogglePtag>
        <ToggleTitle>
          <ToggleContainer
            toggles={toggles1}
            onClick={() => handleToggle1("1")}
          >
            <Toggle
              onClick={() => handleToggle1("1")}
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
      </TogglePtag>
    </>
  );
};

export const Toggle2 = () => {
  const [toggles2, setToggles2] = useState<boolean>(false);
  const handleToggle2 = (e: string) => {
    if (e === "2") {
      setToggles2(!toggles2);
    }
  };
  return (
    <>
      <ToggleTitle>
        <ToggleContainer toggles={toggles2} onClick={() => handleToggle2("2")}>
          <Toggle
            toggles={toggles2}
            onClick={() => handleToggle2("2")}
          ></Toggle>
        </ToggleContainer>

        <TogglePtag>리포지토리</TogglePtag>
      </ToggleTitle>
      <ToggleContentContainer>
        <ToggleContent
          href="https://github.com/sinjw/seb45_main_008"
          target="blank"
          toggles={toggles2}
        >
          https://github.com/sinjw/seb45_main_008
        </ToggleContent>
      </ToggleContentContainer>
    </>
  );
};
export const Toggle3 = () => {
  const [toggles3, setToggles3] = useState<boolean>(false);
  const handleToggle3 = (e: string) => {
    if (e === "3") {
      setToggles3(!toggles3);
    }
  };
  return (
    <>
      <TogglePtag>
        <span>PortFolio</span>

        <ProjectName>SoloProject</ProjectName>
      </TogglePtag>
      <TogglePtag>
        <ToggleTitle>
          <ToggleContainer
            onClick={() => handleToggle3("3")}
            toggles={toggles3}
          >
            <Toggle
              toggles={toggles3}
              onClick={() => handleToggle3("3")}
            ></Toggle>
          </ToggleContainer>
          배포링크
        </ToggleTitle>
      </TogglePtag>

      <TogglePtag>
        <ToggleContentContainer>
          <ToggleContent
            href="http://sinjoongwonsportfolio.s3-website.ap-northeast-2.amazonaws.com/"
            target="blank"
            toggles={toggles3}
          >
            http://sinjoongwonsportfolio.s3-website.ap-northeast-2.amazonaws.com/
          </ToggleContent>
        </ToggleContentContainer>
      </TogglePtag>
    </>
  );
};
export const Toggle4 = () => {
  const [toggles4, setToggles4] = useState<boolean>(false);
  const handleToggle4 = (e: string) => {
    if (e === "4") {
      setToggles4(!toggles4);
    }
  };
  return (
    <>
      <TogglePtag>
        <ToggleTitle>
          <ToggleContainer
            onClick={() => handleToggle4("4")}
            toggles={toggles4}
          >
            <Toggle
              toggles={toggles4}
              onClick={() => handleToggle4("4")}
            ></Toggle>
          </ToggleContainer>
          Git hub
        </ToggleTitle>
      </TogglePtag>
      <TogglePtag>
        <ToggleContentContainer>
          <ToggleContent
            href="https://github.com/sinjw/PortFolio"
            target="blank"
            toggles={toggles4}
          >
            https://github.com/sinjw/PortFolio
          </ToggleContent>
        </ToggleContentContainer>
      </TogglePtag>
    </>
  );
};

export default { Toggle1, Toggle2, Toggle3, Toggle4 };

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

const ProjectName = styled.p`
  font-size: 12px;
  display: inline;
  margin-left: 5px;
`;

const TogglePtag = styled.div`
  font-size: 15px;
  

  span {
    font-size: 20px;
    color: #2e4d4d;
    "Noto Sans KR",sans-serif;
    font-weight:900;
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

const ToggleTitle = styled.div`
  display: flex;
`;

const ToggleContentContainer = styled.div`
  display: flex;
`;
