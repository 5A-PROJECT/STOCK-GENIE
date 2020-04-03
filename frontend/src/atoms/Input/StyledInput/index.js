import React from 'react';
import styled from 'styled-components';

const ExtendedInput = styled.input``;

function StyledInput(props) {
  return <ExtendedInput {...props} />;
}

export default StyledInput;
