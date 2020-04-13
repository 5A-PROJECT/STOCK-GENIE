import React from 'react';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import MaterialInput from '../../../../../atoms/Input/MaterialInput';
import MaterialButton from '../../../../../atoms/Button/MaterialButton';

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
        <Title>포트폴리오 추가</Title>
        <ModalForm>
          <MaterialInput
            label="포트폴리오 이름"
            value={''}
            name="name"
            type="text"
            // onChange={}
            placeholder="포트폴리오 이름을 입력하세요"
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
