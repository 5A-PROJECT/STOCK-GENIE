import { createChart } from 'lightweight-charts';
import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';

function Chart(props) {
  const name = props.info[2];
  const chartdiv = useRef(null);
  useEffect(() => {
    const chart = createChart(chartdiv.current, { width: 500, height: 300 });
    // chart size조정
    chart.resize(props.info[0], props.info[1]);
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 },
    ]);
    // function addOptions({
    //   watermark: {
    //     visible: True},
    // });
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <div ref={chartdiv} />
    </div>
  );
}
export default Chart;
