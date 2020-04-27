import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import HideOnScroll from './HideOnScroll';
import AppBarTemplate from './AppBarTemplate';

function ScrollWrapper(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>{props.children}</AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

function AppBarContainer(props) {
  const { authStore } = props;
  const { isLoggedIn } = props.authStore;
  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (!authStore.isLoggedin && token) {
      console.log('토큰 유효 확인 요청');
      // TODO: token 확인 요청
      authStore.check(token);
    }
  }, [authStore]);

  return (
    <ScrollWrapper {...props}>
      <AppBarTemplate isLoggedIn={isLoggedIn} />
    </ScrollWrapper>
  );
}

export default inject('authStore')(observer(AppBarContainer));
