import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

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
function Paging(props) {
  console.log('page');
  console.log(props);
  let { itemCount, pageSize, currentPage, onPageChange } = props;
  console.log(typeof itemCount);
  console.log(typeof pageSize);
  itemCount *= 1;
  pageSize *= 1;
  let pageCount = itemCount / pageSize;
  console.log(pageCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  console.log(pages);
  // const pageNumbers = [];

  // for (let i = start; i <= end; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <Wrapper>
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? 'page-item active' : 'page-item'}
          style={{ cursor: 'pointer' }}
        >
          <PageButton onClick={() => onPageChange(page)}>
            {/* <a className="page-link">{page}</a> */}
            {page}
          </PageButton>
        </li>
      ))}
    </Wrapper>
  );
}
export default Paging;
