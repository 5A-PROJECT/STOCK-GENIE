import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Show_allnews from './Show_allnews';

const TitleWrapper = styled.div`
  margin-left: 7%;
  margin-top: 5%;
  .Button {
    size: large;
  }
`;

const NewsData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

function AllNewsList() {
  const [news, setNews] = useState([]);
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
        title: 'AI 인력양성 지역거점, 부산·강원·충북·광주 4개 지자체 선정',
        url: 'https://www.boannews.com/media/view.asp?idx=87661',
      });
    }
    setNews(news_data);
  }, []);
  return (
    <>
      <TitleWrapper>
        <ButtonGroup variant="text">
          <Button>전체</Button>
          <Button>조회수</Button>
          <Button>GoodNews</Button>
          <Button>BadNews</Button>
        </ButtonGroup>
      </TitleWrapper>
      <NewsData>
        <NewsWrapper>
          {news.map((news) => (
            <Show_allnews key={news.id} news={news} />
          ))}
        </NewsWrapper>
      </NewsData>
    </>
  );
}

export default AllNewsList;
