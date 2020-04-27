import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { inject } from 'mobx-react';

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.tag.input[200]};
  border-radius: 5px;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.tag.input[300]};
    transition-duration: 0.5s;
  }
`;

const InputWrapper = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  input {
    border: none;
    border-bottom: 1px solid black;
    :focus {
      outline: none;
    }
  }
`;

function TagAddInput({ portfolioStore }) {
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState('');

  const input = React.createRef();

  const onInputChange = (e) => {
    setTag(e.target.value);
  };

  const onKeyDown = (e) => {
    // 엔터
    if (e.keyCode === 13) {
      if (tag.length < 10) {
        portfolioStore.addTag({
          name: tag,
        });
        setTag('');
      } else {
        alert('10글자를 넘을 수 없습니다.');
      }
    }
    // esc
    else if (e.keyCode === 27) {
      setOpen(false);
      setTag('');
    }
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <InputWrapper>
          <input
            ref={input}
            type="text"
            onChange={onInputChange}
            value={tag}
            onKeyDown={onKeyDown}
            placeholder="10자 미만"
          />
          <StyledButton onClick={onCancel}>취소</StyledButton>
        </InputWrapper>
      ) : (
        <StyledButton onClick={onOpen}>+</StyledButton>
      )}
    </>
  );
}

export default inject('portfolioStore')(TagAddInput);
