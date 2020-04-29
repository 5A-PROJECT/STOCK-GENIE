import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const DetailHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  .name {
    font-size: 1.6rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .code {
    color: grey;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// const ButtonContainer = styled.div`
//   display: flex;
// `;

const StyledCurrency = styled.span`
  margin-left: 0.3rem;
  color: grey;
`;

const Currency = ({ country }) => {
  return (
    <>
      {country === 'south korea' ? (
        <StyledCurrency>KRW</StyledCurrency>
      ) : (
        <StyledCurrency>USD</StyledCurrency>
      )}
    </>
  );
};

function DetaillHeader({ stock }) {
  const { name, code, country, currentprice } = stock;
  return (
    <DetailHeaderWrapper>
      <Title>
        <span className="name">{name}</span>
        <span className="code">{code}</span>
      </Title>
      <Price>
        {currentprice.toLocaleString()}
        <Currency country={country} />
      </Price>
    </DetailHeaderWrapper>
  );
}
export default inject('predictStore')(observer(DetaillHeader));
