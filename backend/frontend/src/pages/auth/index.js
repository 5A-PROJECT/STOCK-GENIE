import React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styled from 'styled-components';
import Logo from '../../molecules/Logo';
import AccessProtection from '../../molecules/AccessProtection';
import { Helmet } from 'react-helmet-async';

const AuthPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.authForm};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

function AuthPage({ type }) {
  return (
    <AccessProtection authed={false} redirectPath={'/'}>
      <Helmet>
        <title>스톡지니 | {type.toUpperCase()}</title>
      </Helmet>
      <AuthPageWrapper>
        <Logo />
        <AuthFormContainer type={type} />
      </AuthPageWrapper>
    </AccessProtection>
  );
}

export default AuthPage;
