import styled from "styled-components";
import PortWebImg from "../../../assets/portfolio.png";
interface Props {
  AnimationPort: boolean;
  DetailViewPort: boolean;
}
export const PortFolioView = ({ DetailViewPort, AnimationPort }: Props) => {
  const detailviewport = DetailViewPort;
  const animationPort = AnimationPort;

  return (
    <ProjectWrapper
      animationPort={animationPort}
      detailviewport={detailviewport}
    >
      <div style={{ display: "flex" }}>
        <StockHolmWebImg src={PortWebImg} />
        <PorjectTextContainer>
          <ProjectIntro>
            <h3>프로젝트 소개</h3>
            <p>
              앞으로도 꾸준히 배워서 개발역량이 커지는 만큼 저와함께 성장 할 수
              있는 포트폴리오를 만들고 싶어서 만들게 되었습니다
            </p>
            <p>
              코드를 중간중간 저장하고 조금이라도 사용에 더 익숙해지기위해서 git
              hub을 사용 하였고 3개의 페이지로 구성하였습니다.
            </p>
            <p></p>
          </ProjectIntro>
          <ProJectReview>
            <h3>프로젝트 후기</h3>

            <p></p>
            <p>
              부트캠프기간 배웠던부분을 복습하면서 여러가지 기능을 시도해보려고
              했습니다 생각했던 기능들을 만들면서 해나가기엔 디자인적인 감각이
              아직은 부족해서 그부분을 고려하는데 생각보다 시간이 많이 들게되어
              앞으로 개발역량을 키워가면서 같이 성장하는 포트폴리오를
              만들어야겠다고 생각했습니다
            </p>
            <p>
              포트폴리오를 제작하면서 부트캠프기간에는 기회가없어서 배포를
              해보지 못했었는데 AWS를 통해 프론트엔드 배포 과정을 복습 해 볼 수
              있었습니다
            </p>
          </ProJectReview>
        </PorjectTextContainer>
      </div>
    </ProjectWrapper>
  );
};
const ProjectWrapper = styled.div<{
  detailviewport: boolean;
  animationPort: boolean;
}>`
  display: flex;
  flex-direction: row;

  opacity: 0;
  transform: translateY(20px);
  transition: all.4s;
  display: none;

  ${(props) =>
    props.detailviewport &&
    `
  display:block;

  `}
  ${(props) =>
    props.animationPort &&
    `
    opacity:1;
  transform: translateY(0px);
 
  `}
`;
const StockHolmWebImg = styled.img`
  margin-right: 20px;
`;
const PorjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProjectIntro = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 18px;

  h3 {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #333;
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 10px;
      height: 3px;
      border-bottom: 13px solid#008000;
      opacity: 0.5;
      display: block;
    }
  }
`;
const ProJectReview = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 18px;

  h3 {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: 30px;
    position: relative;

    color: #333;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 10px;

      height: 3px;
      opacity: 0.5;
      border-bottom: 13px solid#008000;
      display: block;
    }
  }
`;
