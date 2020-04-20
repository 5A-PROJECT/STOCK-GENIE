import React from 'react';
import PortfolioListItem from '../PorfolioListItem';
import styled from 'styled-components';
import PortfolioAddModal from '../PortfolioAddModal';
import { inject, observer } from 'mobx-react';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function PortfolioList({ portfolioStore }) {
  const { portfolios } = portfolioStore;
  return (
    <ListWrapper>
      <PortfolioAddModal />
      {portfolios.map((portfolio) => (
        <PortfolioListItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </ListWrapper>
  );
}

export default inject('portfolioStore')(observer(PortfolioList));
