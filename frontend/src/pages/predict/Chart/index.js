import { createChart } from 'lightweight-charts';
import React, { useRef, useEffect } from 'react';
import axios from 'axios';

// import styled from 'styled-components';

function Chart(props) {
  console.log(props.info.params.name);
  const name = props.info.params.name;
  const chartdiv = useRef(null);
  // 마운트될때 실행될 로직
  useEffect(() => {
    const chart = createChart(chartdiv.current, { width: 500, height: 300 });
    // chart size조정

    chart.resize(props.info.size[0], props.info.size[1]);
    axios
      .get(`http://localhost:8000/predict/${props.info.url}`, {
        params: props.info.params,
      })
      .then((res) => {
        // console.log('chart 그리는 곳');
        console.log(res.data);
        console.log(res.data.data);
        const lineSeries = chart.addLineSeries();
        lineSeries.setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // const lineSeries = chart.addLineSeries();
    // lineSeries.setData([
    //   { time: '2019-04-11', value: 80.01 },
    //   { time: '2019-04-12', value: 96.63 },
    //   { time: '2019-04-13', value: 76.64 },
    //   { time: '2019-04-14', value: 81.89 },
    //   { time: '2019-04-15', value: 74.43 },
    //   { time: '2019-04-16', value: 80.01 },
    //   { time: '2019-04-17', value: 96.63 },
    //   { time: '2019-04-18', value: 76.64 },
    //   { time: '2019-04-19', value: 81.89 },
    //   { time: '2019-04-20', value: 74.43 },
    // ]);
    chart.applyOptions({
      layout: {
        backgroundColor: '#11ffee00',
      },
    });
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <div ref={chartdiv} />
    </div>
  );
}
export default Chart;
