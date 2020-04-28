import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../stockdetail/DetailHeader/index';
import AccessProtection from '../../molecules/AccessProtection';
import DetailInfo from './DetailInfo2';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import DetailChart from './DetailChart';

const StockDetailWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
`;

function StockDetailPage({ predictStore, history }) {
  const { selectedStock, clearSelectedStock } = predictStore;

  // 로직 특성상 새로고침하면 날아가므로 리다이렉트 시켜야함
  useEffect(() => {
    if (selectedStock === null) {
      history.push('/predict');
    }

    return () => {
      console.log('뒷정리?');
      clearSelectedStock();
    };
  }, [selectedStock, history, clearSelectedStock]);

  return (
    <AccessProtection authed={true} redirectPath="/">
      <StockDetailWrapper>
        {selectedStock !== null && (
          <>
            <DetailHeader stock={selectedStock} />
            <DetailChart stock={selectedStock} />
            <DetailInfo />
          </>
        )}
      </StockDetailWrapper>
    </AccessProtection>
  );
}
export default inject('predictStore')(observer(StockDetailPage));
