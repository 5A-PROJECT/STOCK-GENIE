import React, { useMemo } from 'react';
import styled from 'styled-components';
import ReturnRatio from '../../../../molecules/ReturnRatio';

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  .code {
    color: ${({ theme }) => theme.color.portfolio.code};
    font-size: 0.6rem;
    padding: 0.2rem 0.3rem;
    border-radius: 3px;
  }

  .name {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .count {
    background-color: ${({ theme }) => theme.color.portfolio.count};
    color: white;
    font-size: 0.6rem;
    padding: 0.2rem 0.3rem;
    border-radius: 3px;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  .profit {
    font-weight: bold;
  }
  .currency {
    margin-left: 0.3rem;
    color: ${({ theme }) => theme.color.portfolio.currency};
  }
`;

function SummaryContent({ stock, totalBuyingPrice, totalCurrentPrice }) {
  const { count, name, code, currency, current_price, buy_price } = stock;

  const profit = useMemo(() => {
    return totalCurrentPrice - totalBuyingPrice;
  }, [totalCurrentPrice, totalBuyingPrice]);

  const getRatio = useMemo(() => {
    return (((current_price - buy_price) / buy_price) * 100).toFixed(2);
  }, [current_price, buy_price]);

  return (
    <SummaryWrapper>
      <StockInfo>
        <div className="count">{count}주 보유</div>
        <div className="name">{name}</div>
        <div className="code">{code} </div>
      </StockInfo>
      <PriceInfo>
        <span className="profit">{profit.toLocaleString()}</span>
        <span className="currency">{currency}</span>
        <div className="ratio">
          <ReturnRatio ratio={getRatio} iconSize="1rem" fontSize="1rem" />
        </div>
      </PriceInfo>
    </SummaryWrapper>
  );
}

export default SummaryContent;
