import React from 'react';
import styled from 'styled-components';
import Pagination from '../Utils/Pagination';
import ShowAllNews from './ShowAllNews';

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

const PageWrapper = styled.ul`
  display: flex;
`;

function PopNewsList({ news }) {
  const PageList = () => {};
  console.log('popnews');
  console.log(news);
  return (
    <NewsWrapper>
      {news.map((popnews, index) => (
        <ShowAllNews key={index} news={popnews} />
      ))}
      <PageWrapper>
        {PageList}
        <Pagination pageNum={105} start={101} end={111} />
      </PageWrapper>
    </NewsWrapper>
  );
}

export default PopNewsList;
