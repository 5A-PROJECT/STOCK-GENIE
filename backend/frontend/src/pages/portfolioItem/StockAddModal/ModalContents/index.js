import React, { useState } from 'react';
import styled from 'styled-components';
import { Dialog, MenuItem } from '@material-ui/core';
import MaterialInput from '../../../../atoms/Input/MaterialInput';
import MaterialButton from '../../../../atoms/Button/MaterialButton';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';

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

function ModalContents({
  open,
  onClose,
  portfolioStore,
  update = false,
  stock,
}) {
  useEffect(() => {
    if (update && stock) {
      setStockForm(stock);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [stockForm, setStockForm] = useState({
    name: '',
    count: 1,
    code: '',
    buy_price: 10000,
    current_price: 10000,
    currency: 'USD',
    category: 'STOCK',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStockForm({
      ...stockForm,
      [name]: value,
    });
  };

  const addStock = async () => {
    const isAdded = await portfolioStore.addStock(stockForm);
    if (isAdded) {
      setStockForm({
        name: '',
        count: 1,
        code: '',
        buy_price: 10000,
        current_price: 10000,
        currency: 'USD',
        category: 'STOCK',
      });
      onClose();
    }
  };

  const updateStock = () => {
    const isUpdated = portfolioStore.updateStock(stock.id, stockForm);
    if (isUpdated) {
      setStockForm({
        name: '',
        count: 1,
        code: '',
        buy_price: 10000,
        current_price: 10000,
        currency: 'USD',
        category: 'STOCK',
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogWrapper>
        <Title>종목 추가</Title>
        <ModalForm>
          <MaterialInput
            label="종목명"
            value={stockForm.name}
            name="name"
            type="text"
            onChange={handleInputChange}
            placeholder="종목 이름을 적어주세요"
            required
          />
          <MaterialInput
            label="수량"
            value={stockForm.count}
            name="count"
            type="number"
            onChange={handleInputChange}
            placeholder="수량을 입력하세요."
            required
          />
          <MaterialInput
            label="종목코드"
            value={stockForm.code}
            name="code"
            type="text"
            onChange={handleInputChange}
            placeholder="FB 또는 005930와 같은 형식"
            required
          />
          <MaterialInput
            label="매수금액"
            value={stockForm.buy_price}
            name="buy_price"
            type="number"
            onChange={handleInputChange}
            placeholder="매수 금액을 입력하세요."
            required
          />
          <MaterialInput
            label="현재금액"
            value={stockForm.current_price}
            name="current_price"
            type="number"
            onChange={handleInputChange}
            placeholder="현재 금액을 입력하세요."
            required
          />
          <MaterialInput
            label="카테고리"
            value={stockForm.category}
            name="category"
            type="text"
            onChange={handleInputChange}
            placeholder="카테고리를 선택하세요"
            required
            select
          >
            <MenuItem value={'STOCK'}>주식</MenuItem>
            <MenuItem value={'DERIVATIVES'}>선물/옵션</MenuItem>
          </MaterialInput>
          <MaterialInput
            label="통화"
            value={stockForm.currency}
            name="currency"
            type="text"
            onChange={handleInputChange}
            placeholder="통화를 선택하세요."
            required
            select
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'KRW'}>KRW</MenuItem>
          </MaterialInput>
        </ModalForm>
        <ButtonGroup>
          <MaterialButton onClick={onClose}>취소</MaterialButton>
          <MaterialButton onClick={update ? updateStock : addStock}>
            {update ? '수정' : '추가'}
          </MaterialButton>
        </ButtonGroup>
      </DialogWrapper>
    </Dialog>
  );
}

export default inject('portfolioStore')(observer(ModalContents));
