import React from 'react';
import styled from 'styled-components';
import Chart from '../../predict/Chart/index';
import DetailInfo from '../DetailInfo/index';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const DetailHeaderWrapper = styled.div``;

const CompanyBasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
        <Button
          variant="contained"
          color="primary"
          startIcon={<CreateNewFolderIcon />}
        >
          내 포트폴리오에 추가하기
        </Button>
      </CompanyBasicWrapper>
      <h3>금일 시가 : {info.state.currentprice}</h3>
      <hr></hr>

      <ChartWarpper>
        <Chart
          width="1000"
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
