import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

// 예측에서 보여주는 화살표
const UpIcon = styled(ArrowDropUpIcon)`
  color: red;
  font-size: ${(props) => props.size};
`;

const DownIcon = styled(ArrowDropDownIcon)`
  color: blue;
  font-size: ${(props) => props.size};
`;

// 상세보기 버튼
const ZoomIcon = styled(ZoomInIcon)`
  color: ${colors.grey[600]};
  font-size: ${(props) => props.size};
`;

const StockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.grey[300]};
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
  font-size: 1rem;
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};

  cursor: pointer;
  :hover {
    transition-duration: 0.3s;
    background-color: ${colors.grey[200]};
    transform: scale(1.03);
  }

  .name {
    flex-wrap: wrap;
    font-weight: bold;
  }
  .close {
    width: 20%;
  }
  .open {
    width: 20%;
  }
  .rate {
    width: 20%;
  }
  .pagemovebtn {
    justify-self: flex-end;
    align-self: center;
    width: 10%;
    text-align: end;
  }
`;
const Div = styled.div`
  display: flex;
  width: 30%;
`;

function ListTableItem({ data, index }) {
  const { name, close, open, rate, predictpoint, code, country } = data;
  return (
    <StockWrapper>
      <Div>
        <div className="icon">
          {predictpoint === 1 ? <UpIcon /> : <DownIcon />}
        </div>
        <div className="name">{name}</div>
        {/* <div className="code">({d.code})</div> */}
      </Div>
      <div className="close">{close.toLocaleString()}</div>
      <div className="open">{open.toLocaleString()}</div>
      <div className="rate">{rate}</div>
      <div className="pagemovebtn">
        <Link
          to={{
            pathname: 'stockdetail',
            state: {
              name,
              code,
              country,
              currentprice: open,
              index: index.toUpperCase(),
            },
          }}
        >
          <ZoomIcon size={'1.5rem'} title="detail" />
        </Link>
      </div>
    </StockWrapper>
  );
}

export default ListTableItem;
