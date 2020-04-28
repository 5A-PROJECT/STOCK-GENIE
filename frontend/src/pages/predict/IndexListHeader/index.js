import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const ExplainWrapper = styled.div`
  margin-left: 1.8rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  .content {
    font-size: larger;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const UpIcon = styled(ArrowDropUpIcon)`
  color: red;
  font-size: initial;
  display: inline-block;
`;

const DownIcon = styled(ArrowDropDownIcon)`
  color: blue;
  font-size: initial;
  display: inline-block;
`;

function IndexListHeader() {
  return (
    <ExplainWrapper>
      <div className="content">
        - 기업의 시가, 종가, 거래량 등의 데이터를 기반으로 합니다.
      </div>
      <div className="content">
        - Gold, Oil,Cupper 등의 데이터도 활용합니다.
      </div>
      <div className="content">
        - 제시된 데이터를 기반으로 해당 종목의 상승, 하락(
        <UpIcon />, <DownIcon />
        )을 예측합니다.
      </div>
      <div className="content">
        - 종목별 상세보기를 통해서 예측 그래프를 확인할 수 있습니다.
      </div>
    </ExplainWrapper>
  );
}

export default IndexListHeader;
