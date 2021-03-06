import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import AuthFormTemplate from './AuthFormTemplate';

function AuthFormContainer({ type, authStore }) {
  const { authForm } = authStore;

  useEffect(() => {
    authStore.clearAuthForm();
  }, [authStore]);

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

export default inject('authStore')(observer(AuthFormContainer));
