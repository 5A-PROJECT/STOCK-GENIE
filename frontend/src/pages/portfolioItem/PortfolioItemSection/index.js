import React, { useMemo } from 'react';
import PortfolioItemHeader from '../PortfolioItemHeader';
import StockList from '../StockList';
import styled from 'styled-components';
import StockProfits from '../StockProfits';
import TagList from '../../../organisms/TagList';
import RateCharts from '../RateCharts';

const PortfolioItemSectionWrapper = styled.article``;

function PortfolioItemSection({ portfolio }) {
  const { name, created_at, stocks, tags, profit } = portfolio;
  console.log(portfolio);
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
      <TagList tags={tags} />
      <PortfolioItemHeader name={name} created_at={created_at} />
      <StockProfits profit={profit} />
      <RateCharts profit={profit} />
      <StockList stocks={STOCKS}>증권 STOCKS</StockList>
      <StockList stocks={DERIVATIVES}>파생상품 DERIVATIVES</StockList>
    </PortfolioItemSectionWrapper>
  );
}

export default PortfolioItemSection;
