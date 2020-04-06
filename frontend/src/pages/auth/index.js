import React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styled from 'styled-components';
import Logo from '../../molecules/Logo';

const AuthPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.authForm};
  margin: 0 auto;
`;

function AuthPage({ type }) {
  return (
    <AuthPageWrapper>
      <Logo />
      <AuthFormContainer type={type} />
    </AuthPageWrapper>
  );
}

export default AuthPage;
