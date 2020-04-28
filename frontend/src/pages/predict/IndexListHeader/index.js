import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-weight: bold;
  .title {
    font-size: 2rem;
  }
  .category {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: grey;
  }
`;

const Description = styled.ul`
  li {
    font-size: 1rem;
    font-weight: bold;
    & + li {
      margin-top: 0.5rem;
    }
  }
`;

function IndexListHeader() {
  return (
    <>
      <Title>
        <span className="title">
          <span role="img" aria-label="emoji">
            🧠
          </span>{' '}
          예측 리포트
        </span>
        <span className="category">TOP 30</span>
      </Title>

      <Description>
        <li>기업의 시가, 종가, 거래량 등의 데이터를 기반으로 합니다.</li>
        <li>금, 유가, 구리, 환율 등의 데이터를 반영합니다.</li>
        <li>
          제시된 데이터를 기반으로 해당 종목의 상승{' '}
          <span role="img" aria-label="emoji">
            📈
          </span>
          및 하락{' '}
          <span role="img" aria-label="emoji">
            📉
          </span>
          을 예측합니다.
        </li>
        <li>종목별 상세보기를 통해서 예측 그래프를 확인할 수 있습니다.</li>
      </Description>
    </>
  );
}

export default IndexListHeader;
