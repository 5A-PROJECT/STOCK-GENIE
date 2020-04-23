import React from 'react';
import styled from 'styled-components';
import MaterialButton from '../../../../atoms/Button/MaterialButton';

const DetailWrapper = styled.div`
  width: 100%;
`;

const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .label {
  }
  .profit {
    font-weight: bold;
  }
  .currency {
    margin-left: 0.3rem;
    color: ${({ theme }) => theme.color.portfolio.currency};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

function DetailContent({ stock, totalBuyingPrice, totalCurrentPrice }) {
  const { buy_price, currency } = stock;
  return (
    <DetailWrapper>
      <PriceWrapper>
        <div>
          <div className="label">매수 평균가</div>
          <span className="profit">{buy_price.toLocaleString()}</span>
          <span className="currency">{currency}</span>
        </div>
        <div>
          <div className="label">매수금액</div>
          <span className="profit">{totalBuyingPrice.toLocaleString()}</span>
          <span className="currency">{currency}</span>
        </div>
        <div>
          <div className="label">평가금액</div>
          <span className="profit">{totalCurrentPrice.toLocaleString()}</span>
          <span className="currency">{currency}</span>
        </div>
      </PriceWrapper>
      <ButtonWrapper>
        <MaterialButton>수정</MaterialButton>
        <MaterialButton>삭제</MaterialButton>
      </ButtonWrapper>
    </DetailWrapper>
  );
}

export default DetailContent;
