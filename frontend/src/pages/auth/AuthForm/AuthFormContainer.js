import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import AuthFormTemplate from './AuthFormTemplate';
import { withRouter } from 'react-router-dom';

function AuthFormContainer({ type, authStore, history }) {
  const { authForm } = authStore;

  useEffect(() => {
    authStore.setHistory(history);
    if (authStore.isLoggedIn) {
      // 이미 로그인 했다면 리다이렉트
      history.push('/');
    }
    authStore.clearAuthForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    authForm[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      authStore.login(authForm);
    } else {
      authStore.register(authForm);
    }
  };

  return (
    <AuthFormTemplate
      username={authForm.username}
      password={authForm.password}
      email={authForm.email}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      type={type}
    />
  );
}

export default withRouter(inject('authStore')(observer(AuthFormContainer)));
