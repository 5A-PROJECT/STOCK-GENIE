import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Pagination from '../Utils/Pagination';
import axios from 'axios';
import ShowAllNews from './ShowAllNews';
import { BASE_URL } from '../../../constants';

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
    const serverUrl = `${BASE_URL}/news/`;
    const token = sessionStorage.getItem('access_token');
    axios
      .get(serverUrl, {
        params: {
          query: '삼성',
        },
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        let news_data = [];
        for (let i = 0; i < res.data.news.length; i++) {
          news_data.push({
            news: res.data.news[i],
            links: res.data.links[i],
            results: res.data.results[i],
          });
        }
        setNews(news_data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const recentButton = () => {};
  // const recentButton = () => {};
  const goodNewsButton = () => {};
  const badNewsButton = () => {};
  return (
    <>
      <div>
        <TitleWrapper>
          <ButtonGroup variant="text">
            <Button>최근순</Button>
            <Button>조회수</Button>
            <Button>Good News</Button>
            <Button>Bad News</Button>
          </ButtonGroup>
        </TitleWrapper>
        <NewsWrapper>
          {news.map((news, index) => (
            <ShowAllNews key={index} news={news} />
          ))}
          <PageList>
            <Pagination pageNum={105} start={101} end={111} />
          </PageList>
        </NewsWrapper>
      </div>
    </>
  );
}

export default AllNewsList;
