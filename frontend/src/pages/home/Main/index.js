import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

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
    opacity: 0.3;
    background-image: url(${`${process.env.PUBLIC_URL}/main_background.jpg`});
    background-position: center;
    background-size: cover;
  }
`;

const Logo = styled.div`
  font-size: 6rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <Contents>
        <Logo>로고 플리즈</Logo>
        <SearchInput />
      </Contents>
    </MainPageWrapper>
  );
}

export default MainPage;
