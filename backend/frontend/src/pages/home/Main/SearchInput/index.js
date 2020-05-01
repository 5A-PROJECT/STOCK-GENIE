import React, { useState } from 'react';
import { TextField, StylesProvider, Button } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CustomInput = styled(TextField)`
  display: block;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align:center;
  /* max-width: 500px; */
  & + & {
    margin-top: 1rem;
  }
  /* 기본 보더 색상 */
  & .MuiOutlinedInput-notchedOutline {
    /* border-color: ${({ theme }) => theme.color.materialInput.border}; */
    border-color:white;
  }
  /* 호버 시 보더 색상 */
  &:hover .MuiOutlinedInput-notchedOutline {
    /* border-color: ${({ theme }) => theme.color.materialInput.hoverBorder}; */
    border-color:white;
  }
  /* 포커스시 라벨 색상 */
  & label.Mui-focused {
    color: ${({ theme }) => theme.color.materialInput.label};
  }
  /* 포커스시 보더 색상 */
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    /* border-color: ${({ theme }) =>
      theme.color.materialInput.focusedBorder}; */
    border-color: white;
  }

`;

const CustomButton = styled(Button)`
  & + & {
    margin-left: 0.3rem;
  }
  width: 100px;
  color: white;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${({ theme }) => theme.color.materialButton.background};
  :hover {
    background-color: ${({ theme }) =>
      theme.color.materialButton.hoverBackground};
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function SearchInput(props) {
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      props.history.push(`/search/${query}`);
    } else {
      alert('검색어는 1글자 이상이어야 합니다.');
    }
  };

  return (
    <StylesProvider injectFirst>
      <StyledForm onSubmit={onSubmit}>
        <CustomInput
          variant="outlined"
          fullWidth
          value={query}
          onChange={onInputChange}
          placeholder="키워드 / 관심 종목의 뉴스 데이터를 분석해보세요."
          autoFocus
        />
        <CustomButton variant="contained" type="submit">
          검색
        </CustomButton>
      </StyledForm>
    </StylesProvider>
  );
}

export default withRouter(SearchInput);
