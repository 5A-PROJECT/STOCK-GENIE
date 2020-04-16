import React from 'react';
import StockListItem from './StockListItem';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

const StockListTableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  th {
    padding: 0.5rem 0;
    border-bottom: 2px solid black;
    background-color: ${colors.blue[400]};
    color: white;
    :first-child {
      border-top-left-radius: 3px;
    }
    :last-child {
      border-top-right-radius: 3px;
    }
  }
`;

const TableBody = styled.tbody`
  th {
    border: 1px solid ${colors.grey[400]};
  }
`;

function StockList({ stocks }) {
  return (
    <StockListTableWrapper>
      <TableHead>
        <tr>
          <th>보유주식</th>
          <th>종목코드</th>
          <th>수량</th>
          <th>매수평균가</th>
          <th>매수금액</th>
          <th>평가금액</th>
          <th>평가손익</th>
          <th>액션</th>
        </tr>
      </TableHead>
      <TableBody>
        {stocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock} />
        ))}
      </TableBody>
    </StockListTableWrapper>
  );
}

export default StockList;
