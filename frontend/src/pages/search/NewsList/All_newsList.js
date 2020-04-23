import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Show_allnews from './Show_allnews';
import Pagination from '../Utils/Pagination';

const TitleWrapper = styled.div`
  margin-left: 20%;
  margin-top: 5%;
  .Button {
    size: large;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

const PageList = styled.ul`
  display: flex;
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
      <div>
        <TitleWrapper>
          <ButtonGroup variant="text">
            <Button>전체</Button>
            <Button>조회수</Button>
            <Button>Good News</Button>
            <Button>Bad News</Button>
          </ButtonGroup>
        </TitleWrapper>
        <NewsWrapper>
          {news.map((news) => (
            <Show_allnews key={news.id} news={news} />
          ))}
          <PageList>
            <Pagination pageSize={10} totalItems={100} />
          </PageList>
        </NewsWrapper>
      </div>
    </>
  );
}

export default AllNewsList;
