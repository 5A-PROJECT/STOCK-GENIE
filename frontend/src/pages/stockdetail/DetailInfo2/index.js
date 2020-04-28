import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import Spinner from '../../../atoms/Spinner';
import LineChart from '../LineChart';
import BarChart from '../BarChart';

const DetailInfoWrapper = styled.div`
  border: 2px solid ${colors.grey[300]};
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  min-height: 400px;
`;

const SpinnerWrapper = styled.div`
  height: 380px;
`;

const GridWapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const ChartWrapper = styled.div`
  height: 400px;
`;

const InfoWrapper = styled.div`
  .title {
    font-size: 1.2rem;
    margin-top: 0.8rem;
    font-weight: bold;
  }

  .content {
    font-size: small;
    color: ${colors.grey[500]};
    margin-bottom: 0.3rem;
    color: ${({ theme }) => theme.color.main.color[500]};
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.grey[700]};
  }
`;

function DetailInfo({ predictStore }) {
  const {
    getPredictData,
    predictData,
    loading,
    salesFormatedData,
    tradeAmountFormatedData,
    fluctuationFormatedData
  } = predictStore;
  console.log(predictData);
  useEffect(() => {
    getPredictData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DetailInfoWrapper>
      {loading['getPredictData'] ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          {predictData && (
            <GridWapper>
              <div>
                <InfoWrapper>
                  <div className="title">시가총액</div>
                  <div className="content">
                    주가와 발행주식 수의 곱. 기업가치를 평가하는 지표
                  </div>
                  <div className="value">
                    {predictData.base['Market Cap'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">매출</div>
                  <div className="content">
                    상품의 매출 또는 서비스의 제공에 대한 수입금액
                  </div>
                  <div className="value">
                    {predictData.base['Revenue'].toLocaleString()}
                  </div>
                </InfoWrapper>
              </div>

              <ChartWrapper>
                <h1>평균 시가총액, 매출 비교</h1>
                <BarChart data={salesFormatedData} />
              </ChartWrapper>

              <ChartWrapper>
                <h1>변동폭 비교 그래프</h1>
                <LineChart data={fluctuationFormatedData} />
              </ChartWrapper>

              <div>
                <InfoWrapper>
                  <div className="title">52주 변동폭</div>
                  <div className="content">1년 동안의 주가 움직임</div>
                  <div className="value">
                    {predictData.base['52 wk Range'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">금일 변동폭</div>
                  <div className="content">금일 주가 움직임</div>
                  <div className="value">
                    {predictData.base['Todays Range'].toLocaleString()}
                  </div>
                </InfoWrapper>
              </div>

              <div>
                <InfoWrapper>
                  <div className="title">거래량</div>
                  <div className="content">
                    주식시장에서 주식이 거래된 총량. 주가상승에 있어서 가장
                    중요한 지표
                  </div>
                  <div className="value">
                    {predictData.base['Volume'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">평균거래량</div>
                  <div className="content">거래량의 평균</div>
                  <div className="value">
                    {predictData.base['Average Vol. (3m)'].toLocaleString()}
                  </div>
                </InfoWrapper>
              </div>
              <ChartWrapper>
                <h1>거래량 비교 그래프</h1>
                <BarChart scheme="dark2" data={tradeAmountFormatedData} />
              </ChartWrapper>
              <ChartWrapper>
                <h1>???뭐든 그래프</h1>
                <LineChart data={fluctuationFormatedData} />
              </ChartWrapper>
              <div>
                <InfoWrapper>
                  <div className="title">주당순이익(EPS)</div>
                  <div className="content">
                    기업의 순이익(당기순이익)을 유통주식수로 나눈것
                  </div>
                  <div className="value">
                    {predictData.base['EPS'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">배당률</div>
                  <div className="content">액면가 대비 배당금의 비율</div>
                  <div className="value">
                    {predictData.base['Dividend (Yield)'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">주가수익률(PER)</div>
                  <div className="content">
                    현재의 주식가격을 1주당 순이익(EPS)로 나눈값
                  </div>
                  <div className="value">
                    {predictData.base['P/E Ratio'].toLocaleString()}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">시장민감도(Beta)</div>
                  <div className="content">시장의 움직임에 대한 민감도</div>
                  <div className="value">{predictData.base['Beta']}</div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">1년 변동률</div>
                  <div className="content">기준시점이 1년 되는 변동률</div>
                  <div className="value">
                    {predictData.base['1-Year Change']}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">발행주식</div>
                  <div className="content">발행한 주식 수</div>
                  <div className="value">
                    {predictData.base['Shares Outstanding'].toLocaleString()}
                  </div>
                </InfoWrapper>
              </div>
            </GridWapper>
          )}
        </>
      )}
    </DetailInfoWrapper>
  );
}

export default inject('predictStore')(observer(DetailInfo));
