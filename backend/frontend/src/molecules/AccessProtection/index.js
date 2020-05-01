import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * Page에 감싸길 바랍니당.
 * 해당 라우트에 연결되는 컴포넌트가
 * 로그인이 상태에 따라 접근이 달라진다면
 * 이걸로 해당 컴포넌트를 감싸주세요
 *
 * authed = boolean 'true'
 * redirectPath = 돌려보낼 경로 ex) '/login'
 */

function AccessProtection({
  authed,
  redirectPath,
  authStore,
  children,
  history,
}) {
  useEffect(() => {
    //  로그인이 되었을 때만 접근이 가능하게 하려면
    if (authed) {
      if (!authStore.isLoggedIn) {
        // 비로그인시 리다이렉트
        history.push(`${redirectPath}`);
      }
    } else {
      if (authStore.isLoggedIn) {
        // 이미 로그인 했다면 리다이렉트 시켜 접근 불가하게 만든다
        history.push(`${redirectPath}`);
      }
    }
  }, [authStore.isLoggedIn, history, authed, redirectPath]);

  return <>{children}</>;
}

AccessProtection.propTypes = {
  authed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default withRouter(inject('authStore')(observer(AccessProtection)));
