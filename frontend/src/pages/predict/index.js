import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import HeaderBar from '../predict/HeaderBar/index';
import Main from '../predict/Main/index';

const PredictPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MainDiv = styled.div`
  margin-top: 2rem;
`;

function PredictPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <div>주가예측 페이지</div>
        <HeadDiv>
          <HeaderBar />
          <HeaderBar />
          <HeaderBar />
          <HeaderBar />
        </HeadDiv>
        <MainDiv>
          <Main />
        </MainDiv>
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
