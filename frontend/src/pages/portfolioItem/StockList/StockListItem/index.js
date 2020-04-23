import React, { useMemo } from 'react';
import ReturnRatio from '../../../../molecules/ReturnRatio';

function StockListItem({ stock }) {
  const { name, count, code, buy_price, current_price, currency } = stock;
  console.log(stock);
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
      <td>{name}</td>
      <td>{code}</td>
      <td>{count} 주</td>
      <td>
        {buy_price.toLocaleString()} {currency}
      </td>
      <td>
        {totalBuyingPrice.toLocaleString()} {currency}
      </td>
      <td>
        {totalCurrentPrice.toLocaleString()} {currency}
      </td>
      <td>
        <ReturnRatio ratio={getRatio} fontSize="1rem" iconSize="1rem" />
        <span>
          {profit.toLocaleString()} {currency}
        </span>
      </td>
      <td>수정 / 삭제</td>
    </tr>
  );
}

export default StockListItem;
