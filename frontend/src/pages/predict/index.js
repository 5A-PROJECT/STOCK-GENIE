import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import HeaderBar from './HeaderBar/index';

const PredictPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PredictPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <div>주가예측 페이지</div>
        <HeaderBar />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
