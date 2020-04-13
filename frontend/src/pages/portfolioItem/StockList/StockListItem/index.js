import React, { useMemo } from 'react';
import ReturnRatio from '../../../../molecules/ReturnRatio';

function StockListItem({ stock }) {
  const { name, count, code, buy_price, current_price } = stock;
  const totalBuyingPrice = useMemo(() => {
    return buy_price * count;
  }, [buy_price, count]);
  const totalCurrentPrice = useMemo(() => {
    return current_price * count;
  }, [current_price, count]);

  const profit = useMemo(() => {
    return totalCurrentPrice - totalBuyingPrice;
  }, [totalCurrentPrice, totalBuyingPrice]);

  const getRatio = useMemo(() => {
    return (((current_price - buy_price) / buy_price) * 100).toFixed(2);
  }, [current_price, buy_price]);

  return (
    <tr>
      <th>{name}</th>
      <th>{code}</th>
      <th>{count} 주</th>
      <th>{buy_price.toLocaleString()} 원</th>
      <th>{totalBuyingPrice.toLocaleString()} 원</th>
      <th>{totalCurrentPrice.toLocaleString()} 원</th>
      <th>
        <ReturnRatio ratio={getRatio} fontSize="1rem" iconSize="1rem" />
        <span>{profit.toLocaleString()} 원</span>
      </th>
    </tr>
  );
}

export default StockListItem;
