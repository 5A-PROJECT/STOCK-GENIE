import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../molecules/LogoutButton';
import { colors } from '@material-ui/core';

const AppBarWrapper = styled.nav`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.teal['A700']};
  align-items: center;
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    width: 100%;
    li {
      & + li {
        margin-left: 1rem;
      }
    }
    .logout-button {
      flex-grow: 1;
      text-align: end;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

function AppBarTemplate({ isLoggedIn }) {
  return (
    <AppBarWrapper>
      <ul>
        <li>
          <NavLink to="/">5A(로고)</NavLink>
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
            <li className="logout-button">
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
