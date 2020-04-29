import React from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

const PortFolioCardWrapper = styled.article`
  height: 130px;
  border: 1px solid ${colors.grey[400]};
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};
  padding: 1rem;
  cursor: pointer;
  :hover {
    transition-duration: 0.3s;
    background-color: ${(props) => props.color[200]};
    transform: scale(1.03);
  }
  & + & {
    margin-top: 1rem;
  }
  background-color: ${(props) => props.color[100]};
`;

function PorfolioCard({ children, color = colors.grey }) {
  return <PortFolioCardWrapper color={color}>{children}</PortFolioCardWrapper>;
}

export default PorfolioCard;
