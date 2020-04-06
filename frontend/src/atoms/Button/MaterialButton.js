import React from 'react';
import { Button, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CustomButton = styled(Button)``;

function MaterialButton(props) {
  return (
    <StylesProvider injectFirst>
      <CustomButton {...props} variant="contained" />
    </StylesProvider>
  );
}

export default MaterialButton;
