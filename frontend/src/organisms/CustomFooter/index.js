import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main.footer};
`;

function CustomFooter(props) {
  return (
    <FooterWrapper>
      <span>©5A-PROJECT, {new Date().getFullYear()}</span>
    </FooterWrapper>
  );
}

export default CustomFooter;
