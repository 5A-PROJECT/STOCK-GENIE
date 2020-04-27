import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import PortfolioItemSection from './PortfolioItemSection';
import Spinner from '../../atoms/Spinner';

const PortfolioItemPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 1rem;
`;

function PortfolioItemPage({ match, history, portfolioStore }) {
  const { id } = match.params;
  const { selectedPortfolio, clearSelectedPortfolio, loading } = portfolioStore;

  useEffect(() => {
    const isPfexist = portfolioStore.getPortfolioById(id);
    if (!isPfexist) {
      //실패시
      // TODO: 유저 검증필요?
      // 또는 해당 포폴이 없으면 홈으로 리다이렉트?
      history.push('/');
    }

    // 언마운트시 뒷정리
    return () => {
      clearSelectedPortfolio();
    };
  }, [id, history, portfolioStore, clearSelectedPortfolio]);

  return (
    <>
      {!loading['getPortfolioById'] && selectedPortfolio ? (
        <PortfolioItemPageWrapper>
          <PortfolioItemSection portfolio={selectedPortfolio} />
        </PortfolioItemPageWrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default inject('portfolioStore')(observer(PortfolioItemPage));
