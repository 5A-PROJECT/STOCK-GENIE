import React from 'react';
import styled from 'styled-components';

const PredictPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PredictPage(props) {
  return (
    <PredictPageWrapper>
      <div>주가예측 페이지</div>
    </PredictPageWrapper>
  );
}

export default PredictPage;
