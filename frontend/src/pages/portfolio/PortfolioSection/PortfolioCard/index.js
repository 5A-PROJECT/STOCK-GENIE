import React from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

const PortFolioCardWrapper = styled.article`
  height: 300px;
  border: 1px solid ${colors.grey[400]};
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};
  cursor: pointer;
  :hover {
    transition-duration: 0.3s;
    background-color: ${colors.grey[300]};
    transform: scale(1.05);
  }
`;

function PorfolioCard({ children }) {
  return <PortFolioCardWrapper>{children}</PortFolioCardWrapper>;
}

export default PorfolioCard;
