import React from 'react';
import { inject } from 'mobx-react';
import AppBarTemplate from './AppBarTemplate';

function AppBarContainer(props) {
  const { isLoggedIn } = props.authStore;
  return <AppBarTemplate isLoggedIn={isLoggedIn} />;
}

export default inject('authStore')(AppBarContainer);
