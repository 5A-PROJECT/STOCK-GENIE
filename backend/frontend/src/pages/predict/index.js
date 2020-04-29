import React from 'react';
import AccessProtection from '../../molecules/AccessProtection';
import IndexListHeader from './IndexListHeader';
import styled from 'styled-components';
import IndexListSection from './IndexListSection';
import IndexListFooter from './IndexListFooter';
import { Helmet } from 'react-helmet-async';

const PredictPageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

function PredictPage() {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <Helmet>
        <title>스톡지니 | 예측리포트</title>
      </Helmet>
      <PredictPageWrapper>
        <IndexListHeader />
        <IndexListFooter />
        <IndexListSection />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
