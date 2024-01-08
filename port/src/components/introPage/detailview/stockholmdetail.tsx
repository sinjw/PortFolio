import styled from "styled-components";
import StockWebImg from "../../../assets/stockholm.png";
export const StockHolmView = ({ DetailViewStock, Animation }: props) => {
  const detailViewStock = DetailViewStock;
  const animation = Animation;
  return (
    <ProjectWrapper detailViewStock={detailViewStock} animation={animation}>
      <div style={{ display: "flex" }}>
        <StockHolmWebImg src={StockWebImg} />
        <PorjectTextContainer>
          <ProjectIntro>
            <h3>프로젝트 소개</h3>
            <p>StockHolm은</p>
            <p>
              스웨덴의 수도의 이름을 이용해서 모의 주식 사이트를 주식(Stock) +
              섬(Holm)이라는 의미를 가지도록 표현한 이름입니다
            </p>

            <p>
              모의 주식 투자를 목적으로 만들어진 사이트이며 주식시장의 Open
              API를 활용해서 주식정보를 받아와 차트로 그려내었습니다
            </p>
            <p>
              또한 단일 페이지로 이루어져있고 OAuth2.0을통해 구글로그인 기능과
              이메일인증 기능을 구현 하였습니다 그리고 이 사이트는 한페이지
              안에서 여러가지 기능들을 수행 할 수 있도록 만들었습니다 .
            </p>
          </ProjectIntro>
          <ProJectReview>
            <h3>프로젝트 후기</h3>

            <p>
              처음 계획 했던것들에 비해서 모든 기능들을 구현하기에는 시간이
              부족했고 이로인해서 개발 기간을 조금 더 보수적으로 잡아야 좋다는
              것을 깨닫게 되었습니다
            </p>
            <p>
              제가 맡아서 작업했던 부분은 오른쪽파트의 탭기능을 활용한
              기능구현을 맡았습니다 게시판기능을 진행할때 AXIOS를이용해 서버와의
              CRUD 기능을만들면서 게시글 삭제부분에서의 오류가 있었는데 그부분을
              구글링을 통해 해결해나가면서 서버와의 통신개념에 대한 이해도를
              조금 높힐 수 있었습니다.
            </p>
            <p>
              아쉬웠던 점은 디자인 적인 부분과 처음생각했던 기능들을 전부
              구현해내지 못한게 아쉬웠습니다.
            </p>
          </ProJectReview>
        </PorjectTextContainer>
      </div>
    </ProjectWrapper>
  );
};
interface props {
  DetailViewStock: boolean;
  Animation: boolean;
}

const ProjectWrapper = styled.div<{
  detailViewStock: boolean;
  animation: boolean;
}>`
  display: none;
  transition: all 0.4s;
  transform: translateY(30px);
  opacity: 0;

  ${(props) =>
    props.detailViewStock &&
    `
  display:block;

  `}
  ${(props) =>
    props.animation &&
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
