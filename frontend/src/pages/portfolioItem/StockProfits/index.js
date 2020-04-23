import React from 'react';
import styled from 'styled-components';
import ReturnRatio from '../../../molecules/ReturnRatio';

const ProfitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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
  } = profit;

  return (
    <ProfitWrapper>
      <Info>
        <div className="label">총매수금액</div>
        <span className="price">{totalBuyingPrice.toLocaleString()}</span>
        <span className="won-unit">KRW</span>
      </Info>
      <Info>
        <div className="label">총평가금액</div>
        <span className="price">{totalCurrentPrice.toLocaleString()}</span>
        <span className="won-unit">KRW</span>
      </Info>
      <Info>
        <div className="label">총평가손익</div>
        <span className="price">{totalProfit.toLocaleString()}</span>
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
    </ProfitWrapper>
  );
}

export default StockProfits;
