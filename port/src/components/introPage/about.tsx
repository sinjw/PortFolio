import { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
const About = () => {
  const isClicked = useSelector((state: RootState) => state.button.isClicked);
  const [showContent, setShowcontent] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      if (isClicked) {
        setShowcontent(true);
      }
    }, 800);
  }, [isClicked]);

  return (
    <>
      <AboutContainer showContent={showContent}>
        <p>
          문득 생각이나는 아이디어들을 배운 기술로 구현해내고 고민하는 과정을
          좋아합니다. 지속적으로 학습하고 배워나가는 개발자가 되도록
          노력하고있습니다{" "}
        </p>
        <p>
          “smooth waters run deep” 제가 가장 좋아하는 영어 격언 입니다. 거칠고
          빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼
          꾸준히 공부하고, 계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은
          지식으로, 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고
          싶습니다.
        </p>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div<{ showContent: boolean }>`
  width: 100%;
  opacity: 0;
  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transition: all 0.6s;
    `}
`;
