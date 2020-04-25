import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DetailInfoWrapper = styled.div``;

function DetailInfo({ code, country, url }) {
  const [data, setData] = useState(null);
  const token = sessionStorage.getItem('access_token');
  useEffect(() => {
    axios
      .get(`http://localhost:8000/predict${url}/`, {
        params: {
          code: code,
          country: country,
        },
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <DetailInfoWrapper>
      {data != null && (
        <>
          <p>시가총액 :{data.base['Market Cap']}</p>
          <p>매출 :{data.base['Revenue']}</p>
          <p>52주 변동폭 :{data.base['52 wk Range']}</p>
          <p>금일 변동폭 :{data.base['Todays Range']}</p>
          <p>주당순이익 :{data.base['EPS']}</p>
          <p>거래량 :{data.base['Volume']}</p>
          <p>배당율 :{data.base['Dividend (Yield)']}</p>
          <p>평균거래량 :{data.base['Average Vol. (3m)']}</p>
          <p>주가수익률 :{data.base['P/E Ratio']}</p>
          <p>시장민감도 :{data.base['Beta']}</p>
          <p>1년 변동률 :{data.base['1-Year Change']}</p>
          <p>발행주식 :{data.base['Shares Outstanding']}</p>
        </>
      )}
    </DetailInfoWrapper>
  );
}

export default DetailInfo;
