import React from 'react';
import styled from 'styled-components';
import Chart from '../Chart';
import PaginationTable from '../CompanyTable';
import { Table } from '@material-ui/core';

const MainChartWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.div``;

function MainChart({ country, name }) {
  return (
    <>
      {/* <MainChartWrapper>
        <Chart
          width="900"
          height="300"
          url="indices"
          params={{
            country,
            name,
          }}
        />
      </MainChartWrapper> */}
      <TableWrapper>
        <h1>AI가 예측하는 {name.toUpperCase()} TOP 30</h1>
        <PaginationTable index={name} />
      </TableWrapper>
    </>
  );
}

export default MainChart;
