import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { observer, inject } from 'mobx-react';

const DetailHeaderWrapper = styled.div``;

const CompanyBasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameCode = styled.div`
  display: flex;
`;

function DetaillHeader({ stock }) {
  return (
    <DetailHeaderWrapper>
      <CompanyBasicWrapper>
        <NameCode>
          <h1>{stock.name}</h1>
          <h3>({stock.code})</h3>
        </NameCode>
        <NameCode>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CreateNewFolderIcon />}
          >
            내 포트폴리오에 추가하기
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FindInPageIcon />}
          >
            관련 기사 검색하기
          </Button>
        </NameCode>
      </CompanyBasicWrapper>
      <h3>금일 시가 : {stock.currentprice.toLocaleString()}</h3>
    </DetailHeaderWrapper>
  );
}
export default inject('predictStore')(observer(DetaillHeader));
