import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import Chart from './Chart/index';
import Select from '../predict/Select/index';
import CompanyTable from '../predict/CompanyTable/index';

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
  margin-bottom: 3rem;
`;

function PredictPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <HeadDiv>
          <Chart info={[300, 150, '금']} />
          <Chart info={[300, 150, '유가']} />
          <Chart info={[300, 150, '구리']} />
          <Chart info={[300, 150, '환율']} />
        </HeadDiv>
        <MainDiv2>
          <MainDiv>
            <Select />
          </MainDiv>
          <MainDiv>
            <Chart info={[700, 300, '']} />
          </MainDiv>
        </MainDiv2>
        <CompanyTable />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
