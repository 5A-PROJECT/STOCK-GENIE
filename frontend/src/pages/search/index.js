import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import WordCloud from './WordCloud';
import PieGraph from './Graph/PieGraph';
import AllNewsList from './NewsList/AllNewsList';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import Spinner from '../../atoms/Spinner';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 1rem;
`;

const WordCloudSection = styled.section``;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NewsSection = styled.section`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
`;

function SearchPage({ newsStore }) {
  const { loading, newsData, formatedNewsData } = newsStore;
  useEffect(() => {
    newsStore.getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      {loading['getNews'] ? (
        <Spinner />
      ) : (
        <>
          {newsData ? (
            <SearchPageWrapper>
              <WordCloudSection>
                <Title>검색어 기반 워드클라우드</Title>
                <WordCloud words={newsData.words} />
              </WordCloudSection>

              <NewsSection>
                <Title>검색어 기반 워드클라우드</Title>
                <AllNewsList news={formatedNewsData} />
                <PieGraph news={formatedNewsData} />
              </NewsSection>
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
