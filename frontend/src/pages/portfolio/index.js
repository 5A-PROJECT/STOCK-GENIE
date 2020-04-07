import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortFolioPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PortFolioPageWrapper>
        <div>포폴페이지</div>
      </PortFolioPageWrapper>
    </AccessProtection>
  );
}

export default PortFolioPage;
