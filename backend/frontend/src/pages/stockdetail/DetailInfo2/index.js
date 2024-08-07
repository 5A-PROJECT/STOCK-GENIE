import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import Spinner from '../../../atoms/Spinner';
import LineChart from '../LineChart';
import BarChart from '../BarChart';

const DetailInfoWrapper = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 400px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
`;

const SpinnerWrapper = styled.div`
  height: 380px;
`;

const InfoGridWapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  border-radius: 5px;
`;

const GridWapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
  align-items: center;
  .block {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;

    @media (max-width: 800px) {
      grid-template-columns: 100%;
    }
  }
`;

const ChartWrapper = styled.div`
  height: 320px;
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
    font-size: 2.5rem;
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
    fluctuationFormatedData,
  } = predictStore;

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
            <>
              <Title>기본 정보</Title>
              <InfoGridWapper>
                <InfoWrapper>
                  <div className="title">발행주식</div>
                  <div className="content">발행한 주식 수</div>
                  <div className="value">
                    {predictData.base['Shares Outstanding']
                      ? predictData.base['Shares Outstanding'].toLocaleString()
                      : predictData.base['Shares Outstanding']}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">주가수익률(PER)</div>
                  <div className="content">
                    현재의 주식가격 / 1주당 순이익(EPS)
                  </div>
                  <div className="value">
                    {predictData.base['P/E Ratio']
                      ? predictData.base['P/E Ratio'].toLocaleString()
                      : predictData.base['P/E Ratio']}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">주당순이익(EPS)</div>
                  <div className="content">
                    기업의 순이익(당기순이익) / 유통주식수
                  </div>
                  <div className="value">
                    {predictData.base['EPS']
                      ? predictData.base['EPS'].toLocaleString()
                      : predictData.base['EPS']}
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className="title">배당률</div>
                  <div className="content">액면가 대비 배당금의 비율</div>
                  <div className="value">
                    {predictData.base['Dividend (Yield)']
                      ? predictData.base['Dividend (Yield)'].toLocaleString()
                      : predictData.base['Dividend (Yield)']}
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
              </InfoGridWapper>
              <Title>비교 정보</Title>
              <GridWapper>
                <div className="block">
                  <div>
                    <InfoWrapper>
                      <div className="title">시가총액</div>
                      <div className="content">
                        주가 * 발행주식 수. 기업가치를 평가하는 지표
                      </div>
                      <div className="value">
                        {Math.floor(
                          predictData.base['Market Cap'] / 1000000,
                        ).toLocaleString()}{' '}
                        백만
                      </div>
                    </InfoWrapper>
                    <InfoWrapper>
                      <div className="title">매출</div>
                      <div className="content">
                        상품의 매출 또는 서비스의 제공에 대한 수입금액
                      </div>
                      <div className="value">
                        {Math.floor(
                          predictData.base['Revenue'] / 1000000,
                        ).toLocaleString()}{' '}
                        백만
                      </div>
                    </InfoWrapper>
                  </div>

                  <ChartWrapper>
                    <BarChart data={salesFormatedData} />
                  </ChartWrapper>
                </div>

                <div className="block">
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
                  <ChartWrapper>
                    <LineChart data={fluctuationFormatedData} />
                  </ChartWrapper>
                </div>

                <div className="block">
                  <div>
                    <InfoWrapper>
                      <div className="title">현재거래량</div>
                      <div className="content">
                        주식시장에서 주식이 거래된 총량
                      </div>
                      <div className="value">
                        {predictData.base['Volume']
                          ? predictData.base['Volume'].toLocaleString()
                          : '-'}{' '}
                        회
                      </div>
                    </InfoWrapper>
                    <InfoWrapper>
                      <div className="title">평균거래량</div>
                      <div className="content">거래량의 평균</div>
                      <div className="value">
                        {predictData.base['Average Vol. (3m)']
                          ? predictData.base[
                              'Average Vol. (3m)'
                            ].toLocaleString()
                          : predictData.base['Average Vol. (3m)']}{' '}
                        회
                      </div>
                    </InfoWrapper>
                  </div>
                  <ChartWrapper>
                    <BarChart scheme="dark2" data={tradeAmountFormatedData} />
                  </ChartWrapper>
                </div>
              </GridWapper>
            </>
          )}
        </>
      )}
    </DetailInfoWrapper>
  );
}

export default inject('predictStore')(observer(DetailInfo));
