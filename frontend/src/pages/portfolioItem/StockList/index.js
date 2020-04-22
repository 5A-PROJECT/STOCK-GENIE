import React from 'react';
import StockListItem from './StockListItem';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

const StockListWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StockListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TableHead = styled.thead`
  th {
    padding: 0.5rem 0;
    border:1px solid black;
    border-bottom: 2px solid black;
    /* background-color: ${colors.blue[400]}; */
    /* color: white; */
    :first-child {
      border-top-left-radius: 3px;
    }
    :last-child {
      border-top-right-radius: 3px;
    }
  }
`;

const TableBody = styled.tbody`
  td {
    border: 1px solid ${colors.grey[400]};
  }
  .none-item {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

function StockList({ stocks, children, category }) {
  return (
    <StockListWrapper>
      <TableTitle>{children}</TableTitle>
      <StockListTable>
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
          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <StockListItem key={stock.id} stock={stock} />
            ))
          ) : (
            <tr>
              <td colSpan="8" className="none-item">
                구성된 종목이 존재하지 않습니다.
              </td>
            </tr>
          )}
        </TableBody>
      </StockListTable>
    </StockListWrapper>
  );
}

export default StockList;
