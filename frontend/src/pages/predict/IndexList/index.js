import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../../constants';
import Spinner from '../../../atoms/Spinner';
import ListTableHeader from './ListTableHeader';
import ListTableItem from './ListTableItem';

const TableWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const SpinnerBox = styled.div`
  height: 800px;
`;

function IndexList({ index }) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const getData = async (index) => {
    setLoading(true);
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

      setDatas(result.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <TableWrapper>
      <ListTableHeader />
      {loading ? (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
      ) : (
        datas.map((data) => <ListTableItem data={data} index={index} />)
      )}
    </TableWrapper>
  );
}

export default IndexList;
