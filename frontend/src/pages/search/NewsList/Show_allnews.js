import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: '90%';
  /* display: flex; */
  /* flex-direction: column; */
  font-size: 15px;
  font-weight: bold;
  a {
    color: black;
  }
`;

function Show_AllNewsList(props) {
  const { title, url } = props.news;
  // console.log(props);
  return (
    <ItemWrapper>
      <a href={url}>
        <p>{title}</p>
      </a>
    </ItemWrapper>
  );
}

export default Show_AllNewsList;
