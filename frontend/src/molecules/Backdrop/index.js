import React from 'react';
import Spinner from '../Spinner';
import styled from 'styled-components';

const BackDropWrapper = styled.div`
  display: ${({ open }) => (open ? '' : 'none')};
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
`;

const SpinnerWrapper = styled.span`
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

function BackDrop({ loading }) {
  return (
    <BackDropWrapper open={loading}>
      <SpinnerWrapper>
        <Spinner color="primary" />
      </SpinnerWrapper>
    </BackDropWrapper>
  );
}

export default BackDrop;
