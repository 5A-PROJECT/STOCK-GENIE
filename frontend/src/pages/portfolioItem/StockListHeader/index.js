import React from 'react';
import styled from 'styled-components';
import ReturnRatio from '../../../molecules/ReturnRatio';

const StockListHeaderWrapper = styled.header`
  margin: 1rem 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.5rem;
  margin: 0 0.3rem;
  font-weight: bold;
`;

function StockListHeader({ portfolio }) {
  const {
    totalBuyingPrice,
    totalCurrentPrice,
    totalProfit,
    totalRatio,
  } = portfolio;

  return (
    <StockListHeaderWrapper>
      <Title>
        총매수금액 <Price>{totalBuyingPrice.toLocaleString()}</Price>원
      </Title>
      <Title>
        총평가금액 <Price>{totalCurrentPrice.toLocaleString()}</Price>원
      </Title>
      <Title>
        총평가손익 <Price>{totalProfit.toLocaleString()}</Price>원
      </Title>
      <Title>
        총평가수익률 <ReturnRatio ratio={totalRatio} />
      </Title>
    </StockListHeaderWrapper>
  );
}

export default StockListHeader;
