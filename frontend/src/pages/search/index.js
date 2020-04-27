import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import WordCloud from './WordCloud';
import PieGraph from './Graph/PieGraph';
import PopNewsList from './NewsList/PopNews';
import AllNewsList from './NewsList/AllNewsList';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import Spinner from '../../atoms/Spinner';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

const ContainWrapper = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

function SearchPage({ newsStore }) {
  const { loading, newsData, formatedNewsData } = newsStore;
  useEffect(() => {
    newsStore.getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(loading['getNews']);
  console.log(newsData);
  console.log('index');
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      {loading['getNews'] ? (
        <Spinner />
      ) : (
        <>
          {newsData ? (
            <SearchPageWrapper>
              <ContainWrapper>
                <WordCloud words={newsData.words} />
                <PopNewsList news={formatedNewsData} />
                <AllNewsList news={formatedNewsData} />
                <PieGraph />
              </ContainWrapper>
            </SearchPageWrapper>
          ) : (
            <div>뉴스 데이터 없음</div>
          )}
        </>
      )}
    </AccessProtection>
  );
}

export default inject('newsStore')(observer(SearchPage));
