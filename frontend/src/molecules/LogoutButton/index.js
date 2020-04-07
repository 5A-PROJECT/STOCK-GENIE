import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const LogoutWrapper = styled.span`
  cursor: pointer;
`;

function LogoutButton({ authStore, history }) {
  const onLogout = () => {
    authStore.logout();
    history.push('/login');
  };
  return <LogoutWrapper onClick={onLogout}>로그아웃</LogoutWrapper>;
}

export default withRouter(inject('authStore')(observer(LogoutButton)));
