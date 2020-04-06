import React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styled from 'styled-components';

const AuthPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.authFormWidth};
  margin: 0 auto;
`;

function AuthPage({ type }) {
  return (
    <AuthPageWrapper>
      <AuthFormContainer type={type} />
    </AuthPageWrapper>
  );
}

export default AuthPage;
