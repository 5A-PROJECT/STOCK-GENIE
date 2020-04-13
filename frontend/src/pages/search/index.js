import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function SearchPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <SearchPageWrapper>
        <div>검색 페이지</div>
      </SearchPageWrapper>
    </AccessProtection>
  );
}

export default SearchPage;
