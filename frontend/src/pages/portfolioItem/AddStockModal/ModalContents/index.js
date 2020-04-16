import React from 'react';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import MaterialInput from '../../../../atoms/Input/MaterialInput';
import MaterialButton from '../../../../atoms/Button/MaterialButton';

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

function ModalContents({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogWrapper>
        <Title>종목 추가</Title>
        <ModalForm>
          <MaterialInput
            label="종목명"
            value={''}
            name="name"
            type="text"
            // onChange={}
            placeholder="종목 이름을 적어주세요"
            required
          />
          <MaterialInput
            label="수량"
            value={''}
            name="count"
            type="number"
            // onChange={}
            placeholder="수량을 입력하세요."
            required
          />
          <MaterialInput
            label="종목코드"
            value={''}
            name="code"
            type="text"
            // onChange={}
            placeholder="FB 또는 005930와 같은 형식"
            required
          />
          <MaterialInput
            label="매수금액"
            value={''}
            name="buy_price"
            type="number"
            // onChange={}
            placeholder="매수 금액을 입력하세요."
            required
          />
          <MaterialInput
            label="현재금액"
            value={''}
            name="current_price"
            type="number"
            // onChange={}
            placeholder="현재 금액을 입력하세요."
            required
          />
          <MaterialInput
            label="카테고리"
            value={''}
            name="category"
            type="text"
            // onChange={}
            placeholder="매수 금액을 입력하세요."
            required
          />
        </ModalForm>
        <ButtonGroup>
          <MaterialButton onClick={onClose}>취소</MaterialButton>
          <MaterialButton>추가</MaterialButton>
        </ButtonGroup>
      </DialogWrapper>
    </Dialog>
  );
}

export default ModalContents;
