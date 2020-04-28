import React from 'react';
import styled from 'styled-components';

const SearchResultPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 2rem auto;
  padding: 1rem;
`;

function SearchResultPage({ match }) {
  const { query } = match.params;
  return (
    <SearchResultPageWrapper>
      <div>검색 결과가 나옵니다.</div>
      <div>{query}</div>
    </SearchResultPageWrapper>
  );
}

export default SearchResultPage;
