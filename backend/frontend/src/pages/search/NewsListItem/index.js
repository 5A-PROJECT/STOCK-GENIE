import React from 'react';
import styled from 'styled-components';

const NewsListItemWrapper = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  & + & {
    margin-top: 2rem;
  }
  color: black;
  text-decoration: none;
  h4 {
    color: grey;
  }
`;

function NewsListItem(props) {
  const { news: news_title, link, description } = props.news;

  const openNewTab = () => {
    window.open(link);
  };

  return (
    <NewsListItemWrapper href="#" onClick={openNewTab}>
      <h1>{news_title}</h1>
      <h4 dangerouslySetInnerHTML={{ __html: description }} />
    </NewsListItemWrapper>
  );
}

export default NewsListItem;
