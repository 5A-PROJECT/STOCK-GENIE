import React, { useEffect } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 300px;
`;

function TradingChart({ chart_id, symbol }) {
  useEffect(() => {
    new window.TradingView.widget({
      autosize: true,
      symbol,
      interval: 'D',
      timezone: 'Asia/Seoul',
      theme: 'light',
      style: '1',
      locale: 'kr',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: chart_id,
    });
  }, [chart_id, symbol]);
  return <ChartContainer id={chart_id} />;
}

export default TradingChart;
