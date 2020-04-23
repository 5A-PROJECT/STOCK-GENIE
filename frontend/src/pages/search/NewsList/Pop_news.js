import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Show_allnews from './Show_allnews';
import Pagination from '../Utils/Pagination';

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

const PageList = styled.ul`
  display: flex;
`;

function Pop_newsList(props) {
  const [popnews, setPopNews] = useState([]);
  useEffect(() => {
    // const url = '백앤드 주소';
    // axios
    //   .get(url)
    //   .then((res) => {
    //     console.log(res);
    //     setNews(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    let news_data = [];
    for (let i = 1; i <= 10; i++) {
      news_data.push({
        id: i,
        title: '美사망자 4만 돌파하자 중국 "우린 용납할 수 없는 숫자"',
        url:
          'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=104&oid=421&aid=0004596928',
      });
    }
    setPopNews(news_data);
    console.log(news_data.length);
  }, []);

  return (
    <NewsWrapper>
      {popnews.map((popnews) => (
        <Show_allnews key={popnews.id} news={popnews} />
      ))}
      <PageList>
        <Pagination pageSize={10} totalItems={100} />
      </PageList>
    </NewsWrapper>
  );
}

export default Pop_newsList;
