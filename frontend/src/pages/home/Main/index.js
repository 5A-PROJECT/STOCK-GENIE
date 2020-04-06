import React from 'react';
import styled from 'styled-components';

const MainPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  margin: 0 auto;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <section>메인 페이지입니다.</section>
    </MainPageWrapper>
  );
}

export default MainPage;
