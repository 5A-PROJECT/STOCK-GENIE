import React from 'react';
import PortfolioCard from '../PortfolioCard';
import Spinner from '../../../../atoms/Spinner';

function PortfolioCardLoading() {
  return (
    <PortfolioCard>
      <Spinner />
    </PortfolioCard>
  );
}

export default PortfolioCardLoading;
