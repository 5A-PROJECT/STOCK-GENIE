import React, { useMemo } from 'react';
import PortfolioItemHeader from '../PortfolioItemHeader';
import StockList from '../StockList';
import styled from 'styled-components';
import StockProfits from '../StockProfits';
import TagList from '../../../organisms/TagList';
import RateCharts from '../RateCharts';
import { observer, inject } from 'mobx-react';

const PortfolioItemSectionWrapper = styled.article``;

function PortfolioItemSection({ portfolioStore }) {
  const { stocks, derivatives } = portfolioStore;
  const { name, created_at, tags, profit } = portfolioStore.selectedPortfolio;
  return (
    <PortfolioItemSectionWrapper>
      <TagList tags={tags} add={true} />
      <PortfolioItemHeader name={name} created_at={created_at} />
      <StockProfits profit={profit} />
      <RateCharts profit={profit} />
      <StockList stocks={stocks}>증권 STOCKS</StockList>
      <StockList stocks={derivatives}>파생상품 DERIVATIVES</StockList>
    </PortfolioItemSectionWrapper>
  );
}

export default inject('portfolioStore')(observer(PortfolioItemSection));
