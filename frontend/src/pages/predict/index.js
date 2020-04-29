import React from 'react';
import AccessProtection from '../../molecules/AccessProtection';
import IndexListHeader from './IndexListHeader';
import styled from 'styled-components';
import IndexListSection from './IndexListSection';
import IndexListFooter from './IndexListFooter';

const PredictPageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

function PredictPage() {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <IndexListHeader />
        <IndexListFooter />
        <IndexListSection />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
