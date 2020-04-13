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
    <div>
      <div>
        <h2>{name}</h2>
        <h3>{code}</h3>
      </div>
      <h4>
        {buy_price.toLocaleString()} * {count}주 ={' '}
        {totalBuyingPrice.toLocaleString()}원
      </h4>

      <h4>
        {current_price.toLocaleString()} * {count}주 ={' '}
        {totalCurrentPrice.toLocaleString()}원
      </h4>

      <ReturnRatio ratio={getRatio} />
      <h4>총 수익 {profit.toLocaleString()}원</h4>
    </div>
  );
}

export default StockListItem;
