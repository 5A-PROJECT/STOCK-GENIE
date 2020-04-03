import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import LoginTemplate from './LoginTemplate';

function LoginContainer({ authStore, history }) {
  const { authForm, clearAuthForm, login } = authStore;

  useEffect(() => {
    clearAuthForm();
  }, [clearAuthForm]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    authForm[name] = value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    login();
    history.push('/');
  };

  return (
    <LoginTemplate
      authForm={authForm}
      handleInputChange={handleInputChange}
      clearAuthForm={clearAuthForm}
      handleSubmit={handleSubmit}
    />
  );
}

export default inject('authStore')(LoginContainer);
