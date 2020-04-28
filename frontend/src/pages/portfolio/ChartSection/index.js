import React, { useState } from 'react';
import TradingChart from '../../../organisms/TradingChart';
import styled from 'styled-components';

const indexes = [
  {
    name: '금',
    symbol: 'FOREXCOM:XAUUSD',
  },
  {
    name: '유가',
    symbol: 'CURRENCYCOM:OIL_BRENT',
  },
  {
    name: '구리',
    symbol: 'COMEX:HG1!',
  },
  {
    name: '원/달러 환율',
    symbol: 'FX_IDC:USDKRW',
  },
];

const ChartSectionWrapper = styled.article`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 0.5rem;
  button {
    border: none;
    background-color: ${({ theme }) => theme.color.main.color[500]};
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    :focus {
      outline: none;
    }
    :hover {
      background-color: ${({ theme }) => theme.color.main.color[700]};
      transition-duration: 0.5s;
    }
    :first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    :last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

function ChartSection() {
  const [symbol, setSymbol] = useState('FOREXCOM:XAUUSD');
  const onChangeChartSymbol = (sym) => {
    setSymbol(sym);
  };
  return (
    <ChartSectionWrapper>
      <Title>주요 지표</Title>
      <ButtonContainer>
        {indexes.map(({ symbol, name }) => (
          <button onClick={() => onChangeChartSymbol(symbol)}>{name}</button>
        ))}
      </ButtonContainer>
      <TradingChart chart_id="trading-chart" symbol={symbol} />
    </ChartSectionWrapper>
  );
}

export default ChartSection;
