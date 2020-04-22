import React from 'react';
import PortfolioItemHeader from '../PortfolioItemHeader';
import StockList from '../StockList';
import styled from 'styled-components';
import StockProfits from '../StockProfits';

const PortfolioItemSectionWrapper = styled.article``;

function PortfolioItemSection({ portfolio }) {
  const { name, created_at, stocks, tags, profit } = portfolio;

  return (
    <PortfolioItemSectionWrapper>
      <PortfolioItemHeader name={name} created_at={created_at} />
      <StockProfits profit={profit} />
      <StockList stocks={stocks}>증권 - 주식 ・ 채권</StockList>
      <StockList stocks={stocks}>파생상품 - 선물 ・ 옵션</StockList>
    </PortfolioItemSectionWrapper>
  );
}

export default PortfolioItemSection;
