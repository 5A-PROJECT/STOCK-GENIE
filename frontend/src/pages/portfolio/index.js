import React, { useEffect } from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSection from './PortfolioSection';
import { observer, inject } from 'mobx-react';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 1rem;
  margin: 0 auto;
`;

function PortFolioPage({ portfolioStore }) {
  useEffect(() => {
    portfolioStore.getMyPortfolios();
  }, [portfolioStore]);

  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PortFolioPageWrapper>
        <PortfolioHeader />
        <PortfolioSection />
      </PortFolioPageWrapper>
    </AccessProtection>
  );
}

export default inject('portfolioStore')(observer(PortFolioPage));
