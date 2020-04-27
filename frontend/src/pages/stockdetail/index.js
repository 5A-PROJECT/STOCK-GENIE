import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../stockdetail/DetailHeader/index';

const StockDetailWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 2rem auto;
  padding: 0 1rem;
`;
function detail({ location }) {
  return (
    <StockDetailWrapper>
      <DetailHeader info={location} />
    </StockDetailWrapper>
  );
}
export default detail;
