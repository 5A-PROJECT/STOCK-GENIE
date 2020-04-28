import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paging from '../Utils/Paging';
import ShowAllNews from './ShowAllNews';

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

function AllNewsList({ news }) {
  let pageItem = [];
  for (let i = 0; i < 10; i++) {
    pageItem.push(news[i]);
  }
  return (
    <>
      <div>
        <TitleWrapper>
          <ButtonGroup variant="text">
            <Button>Good News</Button>
            <Button>Bad News</Button>
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
