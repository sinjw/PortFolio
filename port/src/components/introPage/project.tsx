import styled from "styled-components";
import { useState } from "react";
import Modal from "./modal";

const Project = () => {
  const [ModalClick, setModalClick] = useState<boolean>(false);

  const [ModalAnimation, setModalAnimation] = useState<boolean>(false);

  const handleModalClick = () => {
    setModalClick(!ModalClick);
    console.log(ModalClick);
    setTimeout(() => {
      setModalAnimation(!ModalAnimation);
    }, 100);
  };

  return (
    <ProjectContainer>
      <StockHolmContainer>
        <div>
          <StockHolm>
            <ModalOpenButton onClick={handleModalClick}>Open</ModalOpenButton>
          </StockHolm>
          <p>StockHolm</p>
          <p>TeamProject</p>
          <p>배포링크</p>
          <p>http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/</p>
          <p>리포지토리</p>
          <p>https://github.com/codestates-seb/seb45_main_008</p>
        </div>
        <div>
          <p>프로젝트 소개</p>
          <p>
            StockHolm은 스웨덴의 수도의 이름을 이용해서 모의 주식 사이트를
            주식(Stock) + 섬(Holm)이라는 의미를 가지도록 표현한 이름입니다
          </p>
          <p>
            모의 주식 투자를 목적으로 만들어진 사이트이며 주식시장의 Open API를
            활용해서 주식정보를 받아와 차트로 그려내었습니다
          </p>
          <p>
            또한 단일 페이지로 이루어져있고 한페이지 안에서 여러가지 기능들을
            수행 할 수 있도록 만들었습니다 .
          </p>
        </div>
        <div>
          <p>프로젝트 후기</p>
          <p>
            모의 주식 사이트를 만들게 된 계기는 저희 팀의 팀원들이 전원 새로운
            기술과 어려워보이는 코딩에 도전하고 싶어서 만들게 되었었습니다
          </p>
          <p>
            처음 계획 했던것들에 비해서 모든 기능들을 구현하기에는 시간이
            부족했고 이로인해서 개발 기간을 조금 더 보수적으로 잡는 부분을
            깨닫게 되었습니다
          </p>
          <p>
            프로젝트를 진행하면서 프로젝트 전까지 조금 미숙했던 서버와의
            통신하는 부분들을 조금더 이해 할 수 있게 되었습니다
          </p>
          <p>
            아쉬웠던 점은 디자인 적인 부분과 처음생각했던 기능들을 전부
            구현해내지 못한게 아쉬웠습니다.
          </p>
        </div>
      </StockHolmContainer>
      <div>PortFolio</div>
      <p>StockHolm</p>
      <p>SoloProject</p>
      <p>배포링크</p>
      <p>http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/</p>
      <p>리포지토리</p>
      <p>https://github.com/sinjw/PortFolio</p>
      <PortFolio>
        <ModalOpenButton onClick={handleModalClick}>Open</ModalOpenButton>
      </PortFolio>

      <Modal
        Title="StockHolm"
        content={<div>StockHolm</div>}
        isOpen={ModalClick}
        onClose={handleModalClick}
        modalanimation={ModalAnimation}
      />
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  margin-top: 60px;
  background-color: #ccc;
  width: 100%;
`;

const StockHolmContainer = styled.div`
  width: 100%;

  display: flex;
`;
const StockHolm = styled.div`
  width: 400px;
  height: 250px;
  background-color: #fff;
`;
const PortFolio = styled.div`
  width: 400px;
  height: 250px;
  background-color: #fff;
`;
const ModalOpenButton = styled.div``;
