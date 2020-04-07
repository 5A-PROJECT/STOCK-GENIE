import React from 'react';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner';

const BackDropWrapper = styled.div`
  z-index: 100000;
  display: ${({ open }) => (open ? '' : 'none')};
  position: absolute;
  /* FIXME: 화면이 길땐 제대로 다 못감싸는 경우가 생김 */
  height: 100%;
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
