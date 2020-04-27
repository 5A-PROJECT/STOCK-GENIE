import React from 'react';
import AccessProtection from '../../molecules/AccessProtection';
import FullWidthTabs from './Tab';

function PredictPage() {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <FullWidthTabs />
    </AccessProtection>
  );
}

export default PredictPage;
