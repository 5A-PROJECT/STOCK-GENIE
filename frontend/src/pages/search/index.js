import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import WordCloud from './WordCloud';
import AllNewsList from './NewsList/All_newsList';
import { TextField, Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function SearchBar() {
  return (
    <>
      <Grid align="center">
        <TextField
          size="small"
          variant="outlined"
          id="keyword"
          type="text"
          className="input_text"
          placeholder=""
          // style={{ width: '100%', backgroundColor: 'white' }}
        />

        <SearchIcon />
      </Grid>
    </>
  );
}

function handlerSearch() {}

function SearchPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <SearchPageWrapper>
        <SearchBar />

        <WordCloud />
        <AllNewsList />
      </SearchPageWrapper>
    </AccessProtection>
  );
}

export default SearchPage;
