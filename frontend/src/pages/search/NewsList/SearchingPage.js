import React from 'react';
import styled from 'styled-components';
// import AccessProtection from '../../molecules/AccessProtection';
import WordCloud from './WordCloud';
import PopNewsList from './NewsList/Pop_news';
import AllNewsList from './NewsList/All_newsList';
import Graph from './Graph/pie';
import { TextField, Grid } from '@material-ui/core';
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

const ContainWrapper = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

function SearchingPage(props) {
  return (
    // <AccessProtection authed={true} redirectPath={'/login'}>
    //   <SearchPageWrapper>
    <SearchBar />
    //   </SearchPageWrapper>
    // </AccessProtection>
  );
}

export default SearchingPage;
