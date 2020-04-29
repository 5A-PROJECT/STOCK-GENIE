import React from 'react';
import styled from 'styled-components';
import ReturnRatio from '../../../molecules/ReturnRatio';

const ProfitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  margin: 2rem 0;
  grid-gap: 0.5rem;
`;

const Info = styled.div`
  .label {
    /* font-weight: bold; */
  }
  .price {
    font-size: 1rem;
    font-weight: bold;
  }
  .equal {
    margin: 0 0.3rem;
  }
  .won-unit {
    margin-left: 0.3rem;
    color: grey;
  }
`;

function StockProfits({ profit }) {
  const {
    totalBuyingPrice,
    totalCurrentPrice,
    totalProfit,
    totalRatio,
    exchangeRate,
  } = profit;

  return (
    <ProfitWrapper>
      <Info>
        <div className="label">총매수금액</div>
        <span className="price">
          {Math.floor(totalBuyingPrice).toLocaleString()}
        </span>
        <span className="won-unit">KRW</span>
      </Info>
      <Info>
        <div className="label">총평가금액</div>
        <span className="price">
          {Math.floor(totalCurrentPrice).toLocaleString()}
        </span>
        <span className="won-unit">KRW</span>
      </Info>
      <Info>
        <div className="label">총평가손익</div>
        <span className="price">
          {Math.floor(totalProfit).toLocaleString()}
        </span>
        <span className="won-unit">KRW</span>
      </Info>
      <Info>
        <div className="label">총평가수익률</div>
        <ReturnRatio
          ratio={totalRatio.toFixed(2)}
          fontSize="1rem"
          iconSize="1rem"
        />
      </Info>
      <Info>
        <div className="label">기준 환율</div>
        <span className="price">1</span>
        <span className="won-unit">USD</span>
        <span className="equal">=</span>
        <span className="price">
          {Math.floor(exchangeRate).toLocaleString()}
        </span>
        <span className="won-unit">KRW</span>
      </Info>
    </ProfitWrapper>
  );
}

export default StockProfits;
