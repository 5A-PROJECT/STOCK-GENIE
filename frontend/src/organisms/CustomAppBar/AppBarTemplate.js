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
