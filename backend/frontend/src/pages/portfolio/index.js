import React, { useEffect } from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSection from './PortfolioSection';
import { observer, inject } from 'mobx-react';
import ChartSection from './ChartSection';
import { Helmet } from 'react-helmet-async';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  padding: 1rem;
  margin: 0 auto;
`;

function PortFolioPage({ portfolioStore }) {
  useEffect(() => {
    portfolioStore.getMyPortfolios();
  }, [portfolioStore]);

  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <Helmet>
        <title>스톡지니 | 대시보드</title>
      </Helmet>
      <PortFolioPageWrapper>
        <PortfolioHeader />
        <ChartSection />
        <PortfolioSection />
      </PortFolioPageWrapper>
    </AccessProtection>
  );
}

export default inject('portfolioStore')(observer(PortFolioPage));
