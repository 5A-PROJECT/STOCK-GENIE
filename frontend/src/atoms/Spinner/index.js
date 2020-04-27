import React from 'react';
import { CircularProgress, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CardLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomSpinner = styled(CircularProgress)`
  color: ${({ theme }) => theme.color.loading.spinner};
`;

function Spinner(props) {
  return (
    <StylesProvider injectFirst>
      <CardLoadingWrapper>
        <CustomSpinner {...props} />
      </CardLoadingWrapper>
    </StylesProvider>
  );
}

export default Spinner;
