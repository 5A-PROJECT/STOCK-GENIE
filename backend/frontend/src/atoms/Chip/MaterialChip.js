import React from 'react';
import styled from 'styled-components';
import { Chip, StylesProvider } from '@material-ui/core';

const CustomChip = styled(Chip)`
  border-radius: 7px;
  & + & {
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

function MaterialChip(props) {
  return (
    <StylesProvider injectFirst>
      <CustomChip {...props} />
    </StylesProvider>
  );
}

export default MaterialChip;
