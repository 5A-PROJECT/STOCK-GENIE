import React from 'react';
import PortfolioListItem from '../PorfolioListItem';
import styled from 'styled-components';
import PortfolioAddModal from '../PortfolioAddModal';
import { inject, observer } from 'mobx-react';
import PortfolioCardLoading from '../PortfolioCardLoading';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function PortfolioList({ portfolioStore }) {
  const { portfolios, loading } = portfolioStore;

  return (
    <ListWrapper>
      <PortfolioAddModal />
      {portfolios ? (
        <>
          {portfolios.map((portfolio) => (
            <PortfolioListItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </>
      ) : (
        <div>포트폴리오를 추가해주세요.</div>
      )}
      {loading['getMyPortfolios'] && <PortfolioCardLoading />}
    </ListWrapper>
  );
}

export default inject('portfolioStore')(observer(PortfolioList));
