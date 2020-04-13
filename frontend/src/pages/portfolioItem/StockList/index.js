import React from 'react';
import StockListItem from './StockListItem';

function StockList({ stocks }) {
  return (
    <div>
      <h2>주식 리스트</h2>
      {stocks.map((stock) => (
        <StockListItem key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockList;
