import React from 'react';
import { TextField, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CustomInput = styled(TextField)`
  display: block;
`;

function MaterialInput(props) {
  return (
    <StylesProvider injectFirst>
      <CustomInput {...props} variant="outlined" fullWidth />
    </StylesProvider>
  );
}

export default MaterialInput;
