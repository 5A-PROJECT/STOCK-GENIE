import React from 'react';
import { Button, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  color: white;
  background-color: ${({ theme }) => theme.color.materialButton.background};
  :hover {
    background-color: ${({ theme }) =>
      theme.color.materialButton.hoverBackground};
  }
`;

function MaterialButton(props) {
  return (
    <StylesProvider injectFirst>
      <CustomButton {...props} variant="contained" />
    </StylesProvider>
  );
}

export default MaterialButton;
