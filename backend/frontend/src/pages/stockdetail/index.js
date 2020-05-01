import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../stockdetail/DetailHeader/index';
import AccessProtection from '../../molecules/AccessProtection';
import DetailInfo from './DetailInfo2';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import DetailChart from './DetailChart';
import { Helmet } from 'react-helmet-async';

const StockDetailWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
`;

const Title = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

function StockDetailPage({ predictStore, history }) {
  const { selectedStock, clearSelectedStock } = predictStore;

  // 로직 특성상 새로고침하면 날아가므로 리다이렉트 시켜야함
  useEffect(() => {
    if (selectedStock === null) {
      history.push('/predict');
    }

    return () => {
      clearSelectedStock();
    };
  }, [selectedStock, history, clearSelectedStock]);

  return (
    <AccessProtection authed={true} redirectPath="/">
      <Helmet>
        <title>스톡지니 | 예측보고서</title>
      </Helmet>
      <StockDetailWrapper>
        <Title>
          <span role="img" aria-label="">
            📑{' '}
          </span>
          예측 보고서
        </Title>
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
