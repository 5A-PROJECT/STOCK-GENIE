import { createChart } from 'lightweight-charts';
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Chart({ width, height, url, params, displayName }) {
  const [lineSeries, setLineSeries] = useState(null);
  const { totalPast, totalToday } = getTotalDays();
  const chartdiv = useRef(null);

  // 마운트될때 차트 생성 + 옵션주기
  useEffect(() => {
    const chart = createChart(chartdiv.current, { width, height });
    chart.applyOptions({
      layout: {
        backgroundColor: '#11ffee00',
      },
    });
    const lineSeries = chart.addLineSeries();
    setLineSeries(lineSeries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // API 요청
    if (lineSeries && params.name) {
      const token = sessionStorage.getItem('access_token');
      axios
        .get(`http://localhost:8000/predict/${url}/`, {
          params: {
            ...params,
            from_date: totalPast,
            to_date: totalToday,
          },
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then((res) => {
          // 차트 데이터 가져와서 추가.
          lineSeries.setData(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineSeries, params.name]);

  return (
    <div>
      {displayName && <h2>{displayName}</h2>}
      <div ref={chartdiv} />
    </div>
  );
}
export default Chart;

function getTotalDays() {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  const totalToday = day + '/' + month + '/' + year;

  // 한달 전 날짜 구하기(최근 한달 날짜를 보여주기위해서)
  let monthDate = today.getTime() - 30 * 24 * 60 * 60 * 1000;
  today.setTime(monthDate);

  let monthYear = today.getFullYear();
  let monthMonth = today.getMonth() + 1;
  let monthDay = today.getDate();

  if (monthMonth < 10) {
    monthMonth = '0' + monthMonth;
  }
  if (monthDay < 10) {
    monthDay = '0' + monthDay;
  }

  let totalPast = monthDay + '/' + monthMonth + '/' + monthYear;

  return {
    totalToday,
    totalPast,
  };
}
