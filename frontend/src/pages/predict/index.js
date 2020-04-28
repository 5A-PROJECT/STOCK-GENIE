import React from 'react';
import AccessProtection from '../../molecules/AccessProtection';
import IndexListHeader from './MainChart/IndexListHeader';
import styled from 'styled-components';
import IndexListSection from './IndexListSection';

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
        <IndexListSection />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
