import React from 'react';
import PortfolioListItem from '../PorfolioListItem';
import styled from 'styled-components';
import PortfolioAddModal from '../PortfolioAddModal';
import { inject, observer } from 'mobx-react';
import PortfolioCardLoading from '../PortfolioCardLoading';

const ListWrapper = styled.div``;

function PortfolioList({ portfolioStore }) {
  const { portfolios, loading } = portfolioStore;

  return (
    <>
      {loading['getMyPortfolios'] ? (
        <PortfolioCardLoading />
      ) : (
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
        </ListWrapper>
      )}
    </>
  );
}

export default inject('portfolioStore')(observer(PortfolioList));
