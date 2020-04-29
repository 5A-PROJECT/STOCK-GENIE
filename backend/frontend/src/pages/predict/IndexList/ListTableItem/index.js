import React from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ReturnRatio from '../../../../molecules/ReturnRatio';
import { inject } from 'mobx-react';

const StockWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${colors.grey[300]};
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};
  cursor: pointer;
  :hover {
    transition-duration: 0.3s;
    background-color: ${colors.grey[200]};
    transform: scale(1.01);
  }

  .info {
    justify-self: center;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .name {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 0.3rem;
  }
  .code {
    font-size: 0.6rem;
    color: grey;
  }
`;

const ColoredBadge = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  padding: 0.1rem 0.2rem;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  margin-right: 0.3rem;
`;

const StyledCurrency = styled.span`
  margin-left: 0.3rem;
  color: grey;
`;

const Currency = ({ index }) => {
  return (
    <>
      {index === 'KOSPI' || index === 'KOSDAQ' ? (
        <StyledCurrency>KRW</StyledCurrency>
      ) : (
        <StyledCurrency>USD</StyledCurrency>
      )}
    </>
  );
};

function ListTableItem({ data, selectedIndex, predictStore, history }) {
  const { name, close, open, rate, predictpoint, code, country } = data;
  const { setSelectedStock } = predictStore;

  const goToStockDetail = () => {
    setSelectedStock({
      name,
      code,
      country,
      currentprice: open,
      index: selectedIndex,
    });
    history.push('/stockdetail');
  };

  return (
    <StockWrapper onClick={goToStockDetail}>
      <NameWrapper>
        {predictpoint === 1 ? (
          <ColoredBadge color={colors.red[400]}>상승예측</ColoredBadge>
        ) : (
          <ColoredBadge color={colors.indigo[400]}>하락예측</ColoredBadge>
        )}
        <span className="name">{name}</span>
        <span className="code">{code}</span>
      </NameWrapper>
      <div className="info">
        {close.toLocaleString()}
        <Currency index={selectedIndex} />
      </div>
      <div className="info">
        {open.toLocaleString()}
        <Currency index={selectedIndex} />
      </div>
      <div className="info">
        <ReturnRatio ratio={rate} iconSize="1rem" fontSize="1rem" />
      </div>
    </StockWrapper>
  );
}

export default inject('predictStore')(withRouter(ListTableItem));
