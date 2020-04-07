import React from 'react';
import styled from 'styled-components';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortFolioPage(props) {
  return (
    <PortFolioPageWrapper>
      <div>포폴페이지</div>
    </PortFolioPageWrapper>
  );
}

export default PortFolioPage;
