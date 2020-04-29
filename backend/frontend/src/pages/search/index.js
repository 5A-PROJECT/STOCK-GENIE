import React from 'react';
import styled from 'styled-components';
import WordCloud from './WordCloud';
import PieGraph from './Graph/PieGraph';
import AllNewsList from './NewsList/AllNewsList';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import Spinner from '../../atoms/Spinner';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SearchPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

const DataWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

const NoData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 1.5rem;
  }
`;

const SyledLink = styled(Link)`
  font-size: 2rem;
  margin-top: 1rem;
`;

function SearchPage({ newsStore, match }) {
  const { query } = match.params;
  const {
    loading,
    newsData,
    formatedNewsData,
    goodNewses,
    clearNewsData,
  } = newsStore;
  useEffect(() => {
    newsStore.getNews(query);
    console.log(query);
    return () => {
      clearNewsData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading['getNews'] ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>스톡지니 | 분석결과 - {query}</title>
          </Helmet>
          {newsData ? (
            <SearchPageWrapper>
              <Title>관련 뉴스 데이터 분석</Title>
              <DataWrapper>
                <WordCloud words={newsData.words} />
                <PieGraph news={formatedNewsData} />
              </DataWrapper>
              <Title>관련 뉴스 호재 / 악재 분석</Title>
              <AllNewsList news={goodNewses} />
            </SearchPageWrapper>
          ) : (
            <NoData>
              <div className="text">"{query}" 검색어에 관련된</div>
              <div className="text">뉴스 데이터가 없습니다.</div>
              <SyledLink to="/">홈으로</SyledLink>
            </NoData>
          )}
        </>
      )}
    </>
  );
}

export default inject('newsStore')(observer(SearchPage));
