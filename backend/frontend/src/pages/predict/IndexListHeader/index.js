import React from 'react';
import styled from 'styled-components';

const IndexListHeaderWrapper = styled.header`
  font-weight: bold;
  margin-bottom: 1rem;
  .title {
    font-size: 2rem;
  }
  .category {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: grey;
  }
`;

function IndexListHeader() {
  return (
    <IndexListHeaderWrapper>
      <span className="title">
        <span role="img" aria-label="emoji">
          🧠
        </span>{' '}
        예측 리포트
      </span>
      <span className="category">TOP 30</span>
    </IndexListHeaderWrapper>
  );
}

export default IndexListHeader;
