import React from 'react';
import { TextField, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const CustomInput = styled(TextField)`
  display: block;
  & + & {
    margin-top: 1rem;
  }
  /* 기본 보더 색상 */
  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.materialInput.border};
  }
  /* 호버 시 보더 색상 */
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.materialInput.hoverBorder};
  }
  /* 포커스시 라벨 색상 */
  & label.Mui-focused {
    color: ${({ theme }) => theme.color.materialInput.label};
  }
  /* 포커스시 보더 색상 */
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.materialInput.focusedBorder};
  }
`;

function MaterialInput(props) {
  return (
    <StylesProvider injectFirst>
      <CustomInput {...props} variant="outlined" fullWidth />
    </StylesProvider>
  );
}

export default MaterialInput;
