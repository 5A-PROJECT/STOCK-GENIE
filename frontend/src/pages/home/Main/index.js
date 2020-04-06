import React from 'react';
import styled from 'styled-components';

const MainPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <section>메인페이지</section>
    </MainPageWrapper>
  );
}

export default MainPage;
