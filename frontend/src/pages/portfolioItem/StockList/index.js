import React from 'react';
import styled from 'styled-components';
import StockListPanel from '../StockListPanel';
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';

const StockListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ListPanelWrapper = styled.div`
  margin-top: 0.3rem;
`;

const TableTitle = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

function StockList({ stocks, children, category }) {
  return (
    <StockListWrapper>
      <TableTitle>{children}</TableTitle>
      <ListPanelWrapper>
        {stocks.length > 0 ? (
          stocks.map((stock) => <StockListPanel key={stock.id} stock={stock} />)
        ) : (
          <ExpansionPanel disabled>
            <ExpansionPanelSummary>종목을 추가해주세요.</ExpansionPanelSummary>
          </ExpansionPanel>
        )}
      </ListPanelWrapper>
    </StockListWrapper>
  );
}

export default StockList;
