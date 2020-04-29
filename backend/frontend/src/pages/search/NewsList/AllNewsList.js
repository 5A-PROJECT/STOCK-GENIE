import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paging from '../Utils/Paging';
import ShowAllNews from './ShowAllNews';

const TitleWrapper = styled.div`
  margin-left: 20%;
  margin-top: 5%;
  align-items: center;
  .Button {
    size: large;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1rem;
`;

const PageList = styled.ul`
  display: flex;
`;

function AllNewsList({ news }) {
  const [pageItem, setPageItem] = useState([]);
  const [type, setType] = useState('all');
  let itemCount = 0;

  const handlerAll = () => {
    setType((type) => 'all');
    let tmpData = [];
    for (let i = 0; i < 10; i++) {
      tmpData.push(news[i]);
    }
    setPageItem((pageItem) => tmpData);
  };
  const handlerGood = () => {
    setType((type) => 'good');
    itemCount = 0;
    let tmpData = [];
    for (let i = 0; i < news.length; i++) {
      if (news[i].result === 1) {
        itemCount++;
        tmpData.push(news[i]);
      }
      if (itemCount === 10) break;
    }
    setPageItem((pageItem) => tmpData);
  };
  const handlerBad = () => {
    setType((type) => 'bad');
    itemCount = 0;
    let tmpData = [];
    for (let i = 0; i < news.length; i++) {
      if (news[i].result === 0) {
        itemCount++;
        tmpData.push(news[i]);
      }
      if (itemCount === 10) break;
    }
    setPageItem((pageItem) => tmpData);
  };

  if (pageItem.length === 0) {
    for (let i = 0; i < 10; i++) {
      pageItem.push(news[i]);
    }
  }

  return (
    <>
      <div>
        <TitleWrapper>
          <ButtonGroup variant="text">
            <Button onClick={handlerAll}>전체</Button>
            <Button onClick={handlerGood}>Good News</Button>
            <Button onClick={handlerBad}>Bad News</Button>
          </ButtonGroup>
        </TitleWrapper>
        <NewsWrapper>
          {pageItem.map((data, index) => (
            <ShowAllNews key={index} news={data} />
          ))}
          <PageList>
            <Paging pageSize={news.length} />
          </PageList>
        </NewsWrapper>
      </div>
    </>
  );
}

export default AllNewsList;
