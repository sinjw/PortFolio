import styled from "styled-components";
import MyMemoapp from "../../../assets/mymemoapp.png";
export const MyMemoView = ({ DetailViewMemo, AnimationMemo }: props) => {
  const detailViewMemo = DetailViewMemo;
  const animation = AnimationMemo;
  return (
    <ProjectWrapper detailViewMemo={detailViewMemo} animation={animation}>
      <DetailViewContainer>
        <StockHolmWebImg src={MyMemoapp} />
        <PorjectTextContainer>
          <ProjectIntro>
            <h3>프로젝트 소개</h3>
            <p>
              MyMemoApp은 리액트네이티브를 이용해서 어플리케이션의 형식으로 만든
              간단한 기능들만 사용하는 앱입니다. 과거에 배웠던 엑스포를 활용해서
              앱을 만들고 베포하기 까지의 과정을 답습해보고싶어서 복잡하기보단
              간단하고 복습해 볼 수 있도록하기위해 만들게되었습니다. 메모 저장
              기능은 AsyncStorage를사용해서 저장 하도록 하였고 캘린더와
              연동시켜서 당일작성한 메모를 캘린더를통해 확인 할 수있는 기능을
              구현 하였습니다.
            </p>
          </ProjectIntro>
          <ProJectReview>
            <h3>프로젝트 후기</h3>

            <p>
              처음 계획했던 기능들이 아직 남아있어서 계속 추가하면서 앱을 좀더
              발전 시킬 계획입니다. 여러가지 새로운 아이디어나 기능들이
              떠오르게되면 연습하면서 수정하고 계속 업데이트할 계획입니다. 처음
              이 프로젝트를 만들때는 리액트네이티브 문법이나 여러가지 사용하는
              방법들이 떠오르지않아 알아보고 찾아보는데에 시간을 많이 사용했지만
              그래도 재미있게 작업 할 수 있었고 차차 코드를 효율적으로
              바꿔나가면서 지속적으로 다듬어가는 중인 앱입니다
            </p>
            <ProjectIntro>
              <h3>기술스택</h3>
            </ProjectIntro>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              <SkillStackStyle>ReactNative</SkillStackStyle>
              <SkillStackStyle>TypeScirpt</SkillStackStyle>
              <SkillStackStyle>JavaScript</SkillStackStyle>
              <SkillStackStyle>AsyncStorage</SkillStackStyle>
              <SkillStackStyle>HTML5</SkillStackStyle>
              <SkillStackStyle>CSS</SkillStackStyle>
              <SkillStackStyle>EXPO</SkillStackStyle>
              <SkillStackStyle>BigCalendar</SkillStackStyle>
              <SkillStackStyle>Redux/toolkit</SkillStackStyle>
              <SkillStackStyle>AndroidStudio</SkillStackStyle>
            </p>
          </ProJectReview>
        </PorjectTextContainer>
      </DetailViewContainer>
    </ProjectWrapper>
  );
};
interface props {
  DetailViewMemo: boolean;
  AnimationMemo: boolean;
}

const ProjectWrapper = styled.div<{
  detailViewMemo: boolean;
  animation: boolean;
}>`
  display: none;
  transition: all 0.4s;
  width: 100%;

  transform: translateY(30px);
  opacity: 0;

  ${(props) =>
    props.detailViewMemo &&
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
const DetailViewContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
`;
const StockHolmWebImg = styled.img`
  margin-right: 20px;
  width: 40%;
  object-fit: contain;
`;
const PorjectTextContainer = styled.div`
  display: flex;
  width: 70%;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-between;
`;
const ProjectIntro = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 15px;

  h3 {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    display: inline-block;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 8px;
      height: 3px;
      border-bottom: 8px solid#008000;
      opacity: 0.5;
      display: block;
    }
  }
`;
const ProJectReview = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 15px;

  h3 {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: 20px;
    position: relative;

    color: #333;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 8px;

      height: 3px;
      opacity: 0.5;
      border-bottom: 8px solid#008000;
      display: block;
    }
  }
`;
const SkillStackStyle = styled.p`
  background-color: #333;
  color: white;
  font-size: 12px;
  padding: 5px 5px;
  border-radius: 5px 5px;
  margin-right: 10px;
  margin-bottom: 5px;
`;
