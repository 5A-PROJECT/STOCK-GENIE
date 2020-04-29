import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../../../atoms/Spinner';
import ListTableHeader from './ListTableHeader';
import ListTableItem from './ListTableItem';
import { inject, observer } from 'mobx-react';

const TableWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const SpinnerBox = styled.div`
  height: 800px;
`;

function IndexList({ predictStore }) {
  const { stockTable, loading, getTableData, selectedIndex } = predictStore;

  useEffect(() => {
    getTableData(selectedIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return (
    <TableWrapper>
      <ListTableHeader />
      {loading['getTableData'] ? (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
      ) : (
        stockTable.map((data) => (
          <ListTableItem
            key={data.id}
            data={data}
            selectedIndex={selectedIndex}
          />
        ))
      )}
    </TableWrapper>
  );
}

export default inject('predictStore')(observer(IndexList));
