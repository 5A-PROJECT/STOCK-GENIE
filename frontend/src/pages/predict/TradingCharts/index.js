import React from 'react';
import styled from 'styled-components';
import TradingChart from '../../../organisms/TradingChart';

const chartList = [
  {
    displayName: '금',
    name: 'Gold',
    url: 'commodities',
    symbol: 'FOREXCOM:XAUUSD',
  },
  {
    displayName: '유가',
    name: 'Brent Oil',
    url: 'commodities',
    symbol: 'CURRENCYCOM:OIL_BRENT',
  },
  {
    displayName: '구리',
    name: 'Copper',
    url: 'commodities',
    symbol: 'COMEX:HG1!',
  },
  {
    displayName: '달러/원 환율',
    name: 'USD/KRW',
    url: 'currencycross',
    symbol: 'FX_IDC:USDKRW',
  },
];

const TradingChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function TradingCharts() {
  return (
    <TradingChartsWrapper>
      {chartList.map((chart, idx) => (
        <TradingChart
          key={idx}
          chart_id={`chart-${idx}`}
          symbol={chart.symbol}
        />
      ))}
    </TradingChartsWrapper>
  );
}

export default TradingCharts;
