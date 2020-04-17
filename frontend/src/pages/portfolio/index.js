import React, { useEffect } from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSection from './PortfolioSection';
import { observer, inject } from 'mobx-react';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortFolioPage({ portfolioStore }) {
  useEffect(() => {
    const { token } = sessionStorage.getItem('access_token');
    portfolioStore.getMyPortfolios(token);
  });

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
