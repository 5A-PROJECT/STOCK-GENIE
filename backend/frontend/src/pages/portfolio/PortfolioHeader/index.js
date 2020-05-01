import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

function PortfolioHeader(props) {
  return (
    <StyledHeader>
      <Title>
        <span role="img" aria-label="emoji">
          📊
        </span>{' '}
        대시보드
      </Title>
    </StyledHeader>
  );
}

export default PortfolioHeader;
