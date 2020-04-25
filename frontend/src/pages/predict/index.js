import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import PaginationTable from './CompanyTable/index';
import HeadCharts from './HeadCharts';
import MainChart from './MainChart';

const PredictPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 0 1rem;
`;

function PredictPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <HeadCharts />
        <MainChart />
        <PaginationTable />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
