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
  }
`;

function Logo(props) {
  return (
    <LogoWrapper>
      <Link to="/">스톡지니</Link>
    </LogoWrapper>
  );
}

export default Logo;
