import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoWrapper = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
  a {
    color: ${({ theme }) => theme.color.main.logo};
    text-decoration: none;
    font-family: 'GmarketSansLight';
    font-weight: bold;
  }
  margin-bottom: 0.5rem;
`;

function Logo(props) {
  return (
    <LogoWrapper>
      <Link to="/">STOCK GENIE</Link>
    </LogoWrapper>
  );
}

export default Logo;
