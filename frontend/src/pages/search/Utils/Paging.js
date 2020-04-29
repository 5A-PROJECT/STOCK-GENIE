import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15%;
`;

const PageButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => props.theme.uiColorOrange};
  margin: 0 0.3rem;
  padding: 0;
  border: none;
`;
function Paging(props) {
  const { pageSize } = props;

  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {pageNumbers.map((number) => (
        <div key={number}>
          <PageButton>{number}</PageButton>
        </div>
      ))}
    </Wrapper>
  );
}
export default Paging;
