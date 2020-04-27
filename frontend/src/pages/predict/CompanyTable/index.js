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
  color: navy;
  font-size: ${(props) => props.size};
`;

const TableWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const StockWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.grey[300]};
  padding: 1rem;
  border-radius: 5px;
`;

function PaginationTable({ index }) {
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
      {data.map((d) => (
        <StockWrapper key={d.id}>
          <>{d.predictpoint === 1 ? <UpIcon /> : <DownIcon />}</>
          <div>{d.name}</div>
          <div>{d.code}</div>
          <div>{d.country}</div>
          <div>{d.open}</div>
          <div>{d.rate}</div>
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
        </StockWrapper>
      ))}
    </TableWrapper>
  );
}

export default PaginationTable;
