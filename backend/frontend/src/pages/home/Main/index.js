import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { Helmet } from 'react-helmet-async';

const MainPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.6;
    background-image: url(${`${process.env.PUBLIC_URL}/main_background.jpeg`});
    background-position: center;
    background-size: cover;
  }
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.gmarket};
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const TextContents = styled.div`
  font-weight: bold;
  .main {
    font-size: 4rem;
    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  .sub {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 1.4rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  .accent {
    color: ${({ theme }) => theme.color.main.logo};
  }

  margin-bottom: 2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <Helmet>
        <title>스톡지니 : 뉴스분석</title>
      </Helmet>
      <Contents>
        <TextContents>
          <div className="main">
            복잡한 <span className="accent">투자</span>,
          </div>
          <div className="main">
            여러분은 관심 끄세요.{' '}
            <span role="img" aria-label="">
              🤫
            </span>
          </div>
          <div className="sub">
            <Logo>스톡지니</Logo>
            <span>가 당신의 고민을 해결해드립니다.</span>
          </div>
        </TextContents>
        <SearchInput />
      </Contents>
    </MainPageWrapper>
  );
}

export default MainPage;
