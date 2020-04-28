import React from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  border-bottom: 1px solid #9e9e9e;
  border-top: 1px solid #9e9e9e;
  background-color: ${colors.teal[50]};
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};

  .start {
    width: 30%;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.teal[900]};
  }
  .title {
    width: 20%;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.teal[900]};
  }

  .end {
    width: 10%;
    justify-self: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
    align-self: center;
    text-align: end;
    color: ${colors.teal[900]};
  }
`;

function ListTableHeader(props) {
  return (
    <Header>
      <div className="start">이름</div>
      <div className="title">전일종가</div>
      <div className="title">시가</div>
      <div className="title">등략율</div>
      <div className="end">상세보기</div>
    </Header>
  );
}

export default ListTableHeader;
