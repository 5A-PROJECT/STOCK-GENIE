import React from 'react';
import styled from 'styled-components';
import MaterialButton from '../../../../atoms/Button/MaterialButton';
import { inject, observer } from 'mobx-react';

const DetailWrapper = styled.div`
  width: 100%;
`;

const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  .label {
  }
  .profit {
    font-weight: bold;
  }
  .currency {
    margin-left: 0.3rem;
    color: ${({ theme }) => theme.color.portfolio.currency};
  }
  .currency-block {
    display: flex;
    align-items: center;
  }
  .arrow {
    font-weight: bold;
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

function DetailContent({
  stock,
  totalBuyingPrice,
  totalCurrentPrice,
  portfolioStore,
}) {
  const { buy_price, currency } = stock;
  const { exchangeRate } = portfolioStore.selectedPortfolio.profit;
  return (
    <DetailWrapper>
      <PriceWrapper>
        <div>
          <div className="label">매수 평균가</div>
          <div className="currency-block">
            <div>
              <span className="profit">{buy_price.toLocaleString()}</span>
              <span className="currency">{currency}</span>
            </div>
            {currency === 'USD' && (
              <div>
                <span className="arrow">↔</span>
                <span className="profit">
                  {Math.floor(buy_price * exchangeRate).toLocaleString()}
                </span>
                <span className="currency">KRW</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="label">매수금액</div>
          <div className="currency-block">
            <div>
              <span className="profit">
                {totalBuyingPrice.toLocaleString()}
              </span>
              <span className="currency">{currency}</span>
            </div>
            {currency === 'USD' && (
              <div>
                <span className="arrow">↔</span>
                <span className="profit">
                  {Math.floor(totalBuyingPrice * exchangeRate).toLocaleString()}
                </span>
                <span className="currency">KRW</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="label">평가금액</div>
          <div className="currency-block">
            <div>
              <span className="profit">
                {totalCurrentPrice.toLocaleString()}
              </span>
              <span className="currency">{currency}</span>
            </div>
            {currency === 'USD' && (
              <div>
                <span className="arrow">↔</span>
                <span className="profit">
                  {Math.floor(
                    totalCurrentPrice * exchangeRate,
                  ).toLocaleString()}
                </span>
                <span className="currency">KRW</span>
              </div>
            )}
          </div>
        </div>
      </PriceWrapper>
      <ButtonWrapper>
        <MaterialButton>수정</MaterialButton>
        <MaterialButton>삭제</MaterialButton>
      </ButtonWrapper>
    </DetailWrapper>
  );
}

export default inject('portfolioStore')(observer(DetailContent));
