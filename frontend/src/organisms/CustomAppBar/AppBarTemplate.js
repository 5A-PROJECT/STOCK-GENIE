import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    li {
      margin-right: 1rem;
    }
  }
`;

function AppBarTemplate({ isLoggedIn }) {
  return (
    <AppBarWrapper>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link>
        </li>
      </ul>
      <div>{isLoggedIn ? '로그인중' : '비로그인상태'}</div>
    </AppBarWrapper>
  );
}

export default AppBarTemplate;
