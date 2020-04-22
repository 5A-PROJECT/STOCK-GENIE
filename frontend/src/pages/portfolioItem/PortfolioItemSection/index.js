import React, { useMemo } from 'react';
import PortfolioItemHeader from '../PortfolioItemHeader';
import StockList from '../StockList';
import styled from 'styled-components';
import StockProfits from '../StockProfits';

const PortfolioItemSectionWrapper = styled.article``;

function PortfolioItemSection({ portfolio }) {
  const { name, created_at, stocks, tags, profit } = portfolio;

  const STOCKS = useMemo(
    () => stocks.filter((stock) => stock.category === 'STOCK'),
    [stocks],
  );

  const DERIVATIVES = useMemo(
    () => stocks.filter((stock) => stock.category === 'DERIVATIVES'),
    [stocks],
  );

  return (
    <PortfolioItemSectionWrapper>
      <PortfolioItemHeader name={name} created_at={created_at} />
      <StockProfits profit={profit} />
      <StockList stocks={STOCKS}>증권 - 주식 ・ 채권</StockList>
      <StockList stocks={DERIVATIVES}>파생상품 - 선물 ・ 옵션</StockList>
    </PortfolioItemSectionWrapper>
  );
}

export default PortfolioItemSection;
