import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import words from './words';
// import axios from 'axios';
import Pop_newsList from '../NewsList/Pop_news.js';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

const options = {
  enableTooltip: true,
  deterministic: false,
  fontSizes: [5, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

function Wordcloud(props) {
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
  }, []);
  return (
    <div>
      <ReactWordcloud options={options} words={words} />
    </div>
  );
}

export default Wordcloud;
