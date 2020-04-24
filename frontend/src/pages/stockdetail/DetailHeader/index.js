import React from 'react';
import styled from 'styled-components';
import Chart from '../../predict/Chart/index';
import DetailInfo from '../DetailInfo/index';
const DetailHeaderWrapper = styled.div``;

const CompanyBasicWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NameCode = styled.div`
  display: flex;
`;

const ChartWarpper = styled.div`
margin-top: 3rem
display: center`;

const DetailInfoWrapper = styled.div`
  margin-top: 2rem;
`;

function DetaillHeader() {
  const name = '삼성전자';
  const code = '000065';
  const currentprice = 50400;
  const country = 'south korea';
  const url = 'stockdetail';
  return (
    <DetailHeaderWrapper>
      <CompanyBasicWrapper>
        <NameCode>
          <h1>{name}</h1>
          <h3>({code})</h3>
        </NameCode>
        <h1>{currentprice}</h1>
      </CompanyBasicWrapper>
      <hr></hr>
      <ChartWarpper>
        <Chart
          width="800"
          height="300"
          url="indices"
          params={{
            country: 'south korea',
            name: 'KOSPI',
          }}
        />
      </ChartWarpper>
      <DetailInfoWrapper>
        <DetailInfo code={code} country={country} url={url} />
      </DetailInfoWrapper>
    </DetailHeaderWrapper>
  );
}
export default DetaillHeader;
