import React from 'react';
import { CircularProgress, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CustomSpinner = styled(CircularProgress)``;

function Spinner(props) {
  return (
    <StylesProvider injectFirst>
      <CustomSpinner {...props} />
    </StylesProvider>
  );
}

export default Spinner;
