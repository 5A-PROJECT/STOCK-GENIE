import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import Chart from './Chart/index';
import Select from '../predict/Select/index';

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

const MainDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PredictPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <div>주가예측 페이지</div>
        <HeadDiv>
          <Chart size={[300, 150]} />
          <Chart size={[300, 150]} />
          <Chart size={[300, 150]} />
          <Chart size={[300, 150]} />
        </HeadDiv>
        <MainDiv2>
          <MainDiv>
            <Select />
          </MainDiv>
          <MainDiv>
            <Chart size={[700, 300]} />
          </MainDiv>
        </MainDiv2>
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
