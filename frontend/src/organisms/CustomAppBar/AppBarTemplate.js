import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../molecules/LogoutButton';

const AppBarWrapper = styled.nav`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    li {
      & + li {
        margin-left: 1rem;
      }
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
`;

function AppBarTemplate({ isLoggedIn }) {
  return (
    <AppBarWrapper>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            {/* 로그인 시 보이는 Nav */}
            <li>
              <NavLink to="/predict">주가예측</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">포트폴리오</NavLink>
            </li>
            <li>
              <NavLink to="/search">검색</NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">로그인</NavLink>
            </li>
            <li>
              <NavLink to="/register">회원가입</NavLink>
            </li>
          </>
        )}
      </ul>
    </AppBarWrapper>
  );
}

export default AppBarTemplate;
