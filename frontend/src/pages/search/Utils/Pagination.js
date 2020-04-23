import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => props.theme.uiColorOrange};
  margin: 0 0.3rem;
  padding: 0;
  border: none;
`;
function Pagination(props) {
  const { pageSize, totalItems } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }
  // console.log('pagenation');
  // console.log(props.totalItems);
  // console.log(pageNumbers);
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
export default Pagination;
