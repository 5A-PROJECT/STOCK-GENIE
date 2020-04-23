import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.a`
  /* width: '90%'; */
  /* display: flex; */
  /* flex-direction: column; */
  font-size: 15px;
  font-weight: bold;
  & + & {
    margin-top: 1rem;
  }
  color: black;
  text-decoration: none;
`;

function Show_NewsList(props) {
  const { title, url } = props.news;

  // console.log(props);
  const openNewTab = () => {
    window.open(url);
  };

  return (
    <div>
      <ItemWrapper href="#" onClick={openNewTab}>
        {title}
      </ItemWrapper>
    </div>
  );
}

export default Show_NewsList;
