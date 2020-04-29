import React, { useMemo } from 'react';
import styled from 'styled-components';
import StockAddModal from '../StockAddModal';

const HeaderWrapper = styled.header`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const TitleWrapper = styled.div`
  .portfolio-name {
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  .portfolio-createdAt {
    color: grey;
  }
`;

function PortfolioItemHeader({ name, created_at }) {
  const formatedCreatedAt = useMemo(() => {
    return new Date(created_at).toLocaleDateString();
  }, [created_at]);

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <span className="portfolio-name">{name}</span>
        <span className="portfolio-createdAt">{formatedCreatedAt}</span>
      </TitleWrapper>
      <StockAddModal />
    </HeaderWrapper>
  );
}

export default PortfolioItemHeader;
