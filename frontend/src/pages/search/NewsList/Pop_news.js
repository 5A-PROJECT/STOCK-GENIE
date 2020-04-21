import React from 'react';
import styled from 'styled-components';

const NewsLink = styled.a`
  font-size: 15px;
  font-weight: bold;
  & + & {
    margin-top: 1rem;
  }
  color: black;
`;

function Pop_newsList(props) {
  const { title, url } = props.popnews;
  // console.log(props);
  return <NewsLink href={url}>{title}</NewsLink>;
}

export default Pop_newsList;
