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
  display: center
  margin-top: 3rem;
  `;

const DetailInfoWrapper = styled.div`
  margin-top: 2rem;
`;

function DetaillHeader({ info }) {
  return (
    <DetailHeaderWrapper>
      <CompanyBasicWrapper>
        <NameCode>
          <h1>{info.state.name}</h1>
          <h3>({info.state.code})</h3>
        </NameCode>
        <h1>{info.state.currentprice}</h1>
      </CompanyBasicWrapper>
      <hr></hr>
      <ChartWarpper>
        <Chart
          width="800"
          height="300"
          url="indices"
          params={{
            country: info.state.country,
            name: info.state.index,
          }}
        />
      </ChartWarpper>
      <DetailInfoWrapper>
        <DetailInfo
          code={info.state.code}
          country={info.state.country}
          url={info.pathname}
        />
      </DetailInfoWrapper>
    </DetailHeaderWrapper>
  );
}
export default DetaillHeader;
