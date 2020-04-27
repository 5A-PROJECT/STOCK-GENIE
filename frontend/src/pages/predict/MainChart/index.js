import React from 'react';
import styled from 'styled-components';
import IndexList from '../IndexList';

const TableWrapper = styled.div``;

function MainChart({ name }) {
  return (
    <TableWrapper>
      <h1>AI가 예측하는 {name.toUpperCase()} TOP 30</h1>
      <IndexList index={name} />
    </TableWrapper>
  );
}

export default MainChart;
