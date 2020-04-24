import React, { useMemo } from 'react';
import styled from 'styled-components';
import RatePieChart from '../RatePieChart';

const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
    grid-template-rows: 300px 300px;
  }
`;

function RateCharts({ profit }) {
  const currencyData = useMemo(() => {
    return [
      {
        id: 'USD',
        label: 'USD',
        value: profit.currencyRate['USD'],
      },
      {
        id: 'KRW',
        label: 'KRW',
        value: profit.currencyRate['KRW'],
      },
    ];
  }, [profit.currencyRate]);

  const categoryData = useMemo(() => {
    return [
      {
        id: '증권',
        label: '증권',
        value: profit.categoryRate['STOCK'],
      },
      {
        id: '파생상품',
        label: '파생상품',
        value: profit.categoryRate['DERIVATIVES'],
      },
    ];
  }, [profit]);
  return (
    <ChartsWrapper>
      <RatePieChart data={currencyData} scheme="dark2" />
      <RatePieChart data={categoryData} scheme="category10" />
    </ChartsWrapper>
  );
}

export default RateCharts;
