import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const MainPageWrapper = styled.div`
  height: 100%;
  background-image: url(${`${process.env.PUBLIC_URL}/main_background.jpg`});
  background-position: center;
  background-size: cover;
`;

const Contents = styled.div`
  padding: 2rem;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <Contents>
        <div>5A</div>
        <SearchInput />
      </Contents>
    </MainPageWrapper>
  );
}

export default MainPage;
