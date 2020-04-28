import React from 'react';
import Chart from '../../predict/Chart';
import styled from 'styled-components';

const ChartWarpper = styled.div`
  display: center;
  margin-bottom: 2rem;
`;

function DetailChart({ stock }) {
  return (
    <ChartWarpper>
      <Chart
        width="1000"
        height="300"
        url="indices"
        params={{
          country: stock.country,
          name: stock.index,
        }}
      />
    </ChartWarpper>
  );
}

export default DetailChart;
