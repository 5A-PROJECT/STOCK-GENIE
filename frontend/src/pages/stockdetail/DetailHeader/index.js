import React from 'react';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
// import FindInPageIcon from '@material-ui/icons/FindInPage';
// import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { observer, inject } from 'mobx-react';

const DetailHeaderWrapper = styled.div`
  margin-bottom: 1rem;
  /* padding: 1rem; */
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  .name {
    font-size: 1.6rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .code {
    color: grey;
  }
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

// const ButtonContainer = styled.div`
//   display: flex;
// `;

const StyledCurrency = styled.span`
  margin-left: 0.3rem;
  color: grey;
`;

const Currency = ({ country }) => {
  return (
    <>
      {country === 'south korea' ? (
        <StyledCurrency>KRW</StyledCurrency>
      ) : (
        <StyledCurrency>USD</StyledCurrency>
      )}
    </>
  );
};

function DetaillHeader({ stock }) {
  const { name, code, country, currentprice } = stock;
  return (
    <DetailHeaderWrapper>
      <Title>
        <span className="name">{name}</span>
        <span className="code">{code}</span>
      </Title>
      <Price>
        {currentprice.toLocaleString()}
        <Currency country={country} />
      </Price>
      {/* <ButtonContainer>
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
        </ButtonContainer> */}
    </DetailHeaderWrapper>
  );
}
export default inject('predictStore')(observer(DetaillHeader));
