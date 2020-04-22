import { createChart } from 'lightweight-charts';
import React, { useRef, useEffect } from 'react';
import axios from 'axios';

// import styled from 'styled-components';

function Chart(props) {
  console.log(props.info.params.name);
  var name = '';
  if (props.info.name_see === true) {
    name = props.info.params.name;
  }
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
