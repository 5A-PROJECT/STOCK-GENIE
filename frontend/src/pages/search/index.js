import React from 'react';
import styled from 'styled-components';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function SearchPage(props) {
  return (
    <SearchPageWrapper>
      <div>검색 페이지</div>
    </SearchPageWrapper>
  );
}

export default SearchPage;
