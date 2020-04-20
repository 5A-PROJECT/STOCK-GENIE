import React, { useEffect } from 'react';
import styled from 'styled-components';
import StockList from './StockList';
import StockListHeader from './StockListHeader';
import AddStockModal from './AddStockModal';
import { observer, inject } from 'mobx-react';

const PortfolioItemPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortfolioItemPage({ match, history, portfolioStore }) {
  const { id } = match.params;
  const { selectedPortfolio, clearSelectedPortfolio } = portfolioStore;

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
    <PortfolioItemPageWrapper>
      {selectedPortfolio && (
        <>
          <h1>{selectedPortfolio.name}</h1>
          <h5>{selectedPortfolio.created_at} 생성</h5>
          {/* 종목들이 있을때만 보이도록 */}
          {selectedPortfolio.stocks.length > 0 ? (
            <>
              <StockListHeader portfolio={selectedPortfolio} />
              <AddStockModal />
              <h4>증권(주식/채권)</h4>
              <StockList stocks={selectedPortfolio.stocks} />
              <h4>파생상품(선물/옵션)</h4>
              <StockList stocks={selectedPortfolio.stocks} />
            </>
          ) : (
            <>
              <h2>포트폴리오에 종목을 추가해주세요!</h2>
              <AddStockModal />
            </>
          )}
        </>
      )}
    </PortfolioItemPageWrapper>
  );
}

export default inject('portfolioStore')(observer(PortfolioItemPage));
