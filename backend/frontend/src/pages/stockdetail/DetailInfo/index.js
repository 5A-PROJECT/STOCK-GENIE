import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BASE_URL } from '../../../constants';

const DetailInfoWrapper = styled.div``;

const IndexWrapper = styled.div``;

const IndexGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const IndexPartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
`;

function DetailInfo({ code, country, url }) {
  const [data, setData] = useState(null);
  const token = sessionStorage.getItem('access_token');
  useEffect(() => {
    axios
      .get(`${BASE_URL}/predict${url}/`, {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailInfoWrapper>
      {data != null && (
        <>
          <IndexGroupWrapper>
            <IndexWrapper>
              <IndexPartWrapper>
                <p>
                  <b>시가총액</b>
                </p>
                <p>{data.base['Market Cap']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>매출</b>
                </p>
                <p>{data.base['Revenue']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>52주 변동폭</b>
                </p>
                <p>{data.base['52 wk Range']}</p>
              </IndexPartWrapper>
            </IndexWrapper>
            <IndexWrapper>
              <IndexPartWrapper>
                <p>
                  <b>금일 변동폭</b>
                </p>
                <p>{data.base['Todays Range']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>주당순이익</b>
                </p>
                <p>{data.base['EPS']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>거래량</b>
                </p>
                <p>{data.base['Volume']}</p>
              </IndexPartWrapper>
            </IndexWrapper>
            <IndexWrapper>
              <IndexPartWrapper>
                <p>
                  <b>배당율</b>
                </p>
                <p>{data.base['Dividend (Yield)']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>평균거래량</b>
                </p>
                <p>{data.base['Average Vol. (3m)']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>주가수익률</b>
                </p>
                <p>{data.base['P/E Ratio']}</p>
              </IndexPartWrapper>
            </IndexWrapper>
            <IndexWrapper>
              <IndexPartWrapper>
                <p>
                  <b>시장민감도</b>
                </p>
                <p>{data.base['Beta']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>1년 변동률</b>
                </p>
                <p>{data.base['1-Year Change']}</p>
              </IndexPartWrapper>
              <IndexPartWrapper>
                <p>
                  <b>발행주식</b>
                </p>
                <p>{data.base['Shares Outstanding']}</p>
              </IndexPartWrapper>
            </IndexWrapper>
          </IndexGroupWrapper>
        </>
      )}
    </DetailInfoWrapper>
  );
}

export default DetailInfo;
