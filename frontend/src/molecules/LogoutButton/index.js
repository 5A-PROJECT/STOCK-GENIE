import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const LogoutWrapper = styled.span`
  cursor: pointer;
`;

function LogoutButton({ authStore }) {
  const { logout } = authStore;
  return <LogoutWrapper onClick={logout}>로그아웃</LogoutWrapper>;
}

export default inject('authStore')(observer(LogoutButton));
