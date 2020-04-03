import React from 'react';
import StyledInput from '../../../atoms/Input/StyledInput';
import { observer } from 'mobx-react';

function LoginTemplate({ authForm, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        value={authForm.username}
        name="username"
        type="text"
        onChange={handleInputChange}
        placeholder="유저네임"
      />
      <StyledInput
        value={authForm.password}
        name="password"
        type="password"
        onChange={handleInputChange}
        placeholder="비밀번호"
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default observer(LoginTemplate);
