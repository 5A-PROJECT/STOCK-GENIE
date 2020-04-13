import React, { useMemo } from 'react';
import ReturnRatio from '../../../../molecules/ReturnRatio';
import styled from 'styled-components';

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
  const { stocks } = portfolio;

  const totalBuyingPrice = useMemo(() => {
    const price = stocks.reduce(
      (acc, stock) => (acc += stock.buy_price * stock.count),
      0,
    );
    return price;
  }, [stocks]);

  const totalCurrentPrice = useMemo(() => {
    const price = stocks.reduce(
      (acc, stock) => (acc += stock.current_price * stock.count),
      0,
    );
    return price;
  }, [stocks]);

  const totalProfit = useMemo(() => {
    return totalCurrentPrice - totalBuyingPrice;
  }, [totalCurrentPrice, totalBuyingPrice]);

  const totalRatio = useMemo(() => {
    return ((totalProfit / totalBuyingPrice) * 100).toFixed(2);
  }, [totalProfit, totalBuyingPrice]);

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
