import React, { useState } from 'react';
import { TextField, StylesProvider, Button } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CustomInput = styled(TextField)`
  display: block;
  background-color: white;
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

const CustomButton = styled(Button)`
  & + & {
    margin-left: 0.3rem;
  }
  color: white;
  background-color: ${({ theme }) => theme.color.materialButton.background};
  :hover {
    background-color: ${({ theme }) =>
      theme.color.materialButton.hoverBackground};
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`;

function SearchInput(props) {
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/search/${query}`);
  };

  return (
    <StylesProvider injectFirst>
      <StyledForm onSubmit={onSubmit}>
        <CustomInput
          variant="outlined"
          fullWidth
          value={query}
          onChange={onInputChange}
        />
        <CustomButton variant="contained">검색</CustomButton>
      </StyledForm>
    </StylesProvider>
  );
}

export default withRouter(SearchInput);
