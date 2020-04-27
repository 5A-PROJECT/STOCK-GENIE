import React, { useEffect } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 100%;
`;

function TradingChart(props) {
  const Trading = React.createRef(null);

  useEffect(() => {
    const Widget = new window.TradingView.widget({
      autosize: true,
      symbol: 'NASDAQ:DBX',
      interval: 'D',
      timezone: 'Asia/Seoul',
      theme: 'dark',
      style: '1',
      locale: 'kr',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: 'tradingview_85feb',
    });
    Trading.current = Widget;
  }, []);
  return (
    <div class="tradingview-widget-container">
      <ChartContainer id="tradingview_85feb" />
    </div>
  );
}

export default TradingChart;
