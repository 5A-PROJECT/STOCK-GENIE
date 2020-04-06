import React from 'react';
import { inject, observer } from 'mobx-react';
import AppBarTemplate from './AppBarTemplate';

function AppBarContainer({ authStore }) {
  return <AppBarTemplate {...authStore} />;
}

export default inject('authStore')(observer(AppBarContainer));
