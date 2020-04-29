import React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styled from 'styled-components';
import Logo from '../../molecules/Logo';
import AccessProtection from '../../molecules/AccessProtection';

const AuthPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.authForm};
  margin: 0 auto;
`;

function AuthPage({ type }) {
  return (
    <AccessProtection authed={false} redirectPath={'/'}>
      <AuthPageWrapper>
        <Logo />
        <AuthFormContainer type={type} />
      </AuthPageWrapper>
    </AccessProtection>
  );
}

export default AuthPage;
