import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constants';
import { colors } from '@material-ui/core';

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

const TableWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  border-bottom: 1px solid #9e9e9e;
  border-top: 1px solid #9e9e9e;
  background-color: ${colors.teal[50]};
  box-shadow: 2px 2px 1px 1px ${colors.grey[300]};

  .start {
    width: 30%;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.teal[900]};
  }
  .title {
    width: 20%;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.teal[900]};
  }

  .end {
    width: 10%;
    justify-self: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
    align-self: center;
    text-align: end;
    color: ${colors.teal[900]};
  }
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

function IndexList({ index }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const token = sessionStorage.getItem('access_token');
    try {
      const result = await axios.get(`${BASE_URL}/predict/stocktable`, {
        params: {
          index: index.toUpperCase(),
        },
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TableWrapper>
      <Header>
        <div className="start">이름(코드)</div>
        <div className="title">전일종가</div>
        <div className="title">시가</div>
        <div className="title">등략율</div>
        <div className="end">상세보기</div>
      </Header>
      {data.map((d) => (
        <StockWrapper key={d.id}>
          <Div>
            <div className="icon">
              {d.predictpoint === 1 ? <UpIcon /> : <DownIcon />}
            </div>
            <div className="name">{d.name}</div>
            {/* <div className="code">({d.code})</div> */}
          </Div>
          <div className="close">{d.close.toLocaleString()}</div>
          <div className="open">{d.open.toLocaleString()}</div>
          <div className="rate">{d.rate}</div>
          <div className="pagemovebtn">
            <Link
              to={{
                pathname: 'stockdetail',
                state: {
                  name: d.name,
                  code: d.code,
                  country: d.country,
                  currentprice: d.open,
                  index: index.toUpperCase(),
                },
              }}
            >
              <ZoomIcon size={'1.5rem'} title="detail" />
            </Link>
          </div>
        </StockWrapper>
      ))}
    </TableWrapper>
  );
}

export default IndexList;
