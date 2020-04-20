import React from 'react';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import MaterialInput from '../../../../../atoms/Input/MaterialInput';
import MaterialButton from '../../../../../atoms/Button/MaterialButton';
import { useState } from 'react';
import { inject, observer } from 'mobx-react';

const DialogWrapper = styled.div`
  min-width: 300px;
  padding: 1rem;
`;

const Title = styled.h1``;
const ModalForm = styled.form`
  margin: 1rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ModalContents({ open, onClose, portfolioStore }) {
  const [portfolioForm, setPortfolioForm] = useState({
    name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPortfolioForm({
      ...portfolioForm,
      [name]: value,
    });
  };

  const onAddPortfolio = () => {
    const { token } = sessionStorage.getItem('access_token');
    portfolioStore.addPortfolilo(portfolioForm, token);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogWrapper>
        <Title>포트폴리오 추가</Title>
        <ModalForm>
          <MaterialInput
            label="포트폴리오 이름"
            value={portfolioForm.name}
            name="name"
            type="text"
            onChange={handleInputChange}
            placeholder="포트폴리오 이름을 입력하세요"
            required
          />
        </ModalForm>
        <ButtonGroup>
          <MaterialButton onClick={onClose}>취소</MaterialButton>
          <MaterialButton onClick={onAddPortfolio}>추가</MaterialButton>
        </ButtonGroup>
      </DialogWrapper>
    </Dialog>
  );
}

export default inject('portfolioStore')(observer(ModalContents));
