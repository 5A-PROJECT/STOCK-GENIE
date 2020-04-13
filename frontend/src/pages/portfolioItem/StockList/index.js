import React from 'react';
import StockListItem from './StockListItem';
import styled from 'styled-components';

const StockListTableWrapper = styled.table`
  width: 100%;
`;

function StockList({ stocks }) {
  return (
    <StockListTableWrapper>
      <thead>
        <tr>
          <th>보유주식</th>
          <th>수량</th>
          <th>매수평균가</th>
          <th>매수금액</th>
          <th>평가금액</th>
          <th>평가손익</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock} />
        ))}
      </tbody>
    </StockListTableWrapper>
  );
}

export default StockList;
