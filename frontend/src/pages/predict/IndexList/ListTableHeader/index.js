import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-weight: bold;
  padding: 0.5rem 0;
  span {
    text-align: center;
  }
`;

function ListTableHeader() {
  return (
    <Header>
      <span>종목명</span>
      <span>전일종가</span>
      <span>시가</span>
      <span>등락율</span>
    </Header>
  );
}

export default ListTableHeader;
