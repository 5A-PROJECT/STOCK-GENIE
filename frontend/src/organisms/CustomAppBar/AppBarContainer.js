import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import AppBarTemplate from './AppBarTemplate';

function AppBarContainer({ authStore }) {
  const { isLoggedIn, logout, loggedInUser } = authStore;
  useEffect(() => {
    console.log('AppBar render');
    const token = sessionStorage.getItem('access_token');
    if (!authStore.isLoggedin && token) {
      console.log('토큰 유효 확인 요청');
      // TODO: token 확인 요청
      authStore.check();
    }
  }, [authStore]);

  return <AppBarTemplate isLoggedIn={isLoggedIn} logout={logout} />;
}

export default inject('authStore')(observer(AppBarContainer));
