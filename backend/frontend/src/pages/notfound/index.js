import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    font-size: 1.5rem;
  }
`;

const SyledLink = styled(Link)`
  margin-top: 1rem;
  font-size: 2rem;
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <div className="text">404 NOT FOUND</div>
      <div className="text">찾을 수 없는 페이지 입니다.</div>
      <SyledLink to="/">홈으로</SyledLink>
    </NotFoundWrapper>
  );
}

export default NotFound;
