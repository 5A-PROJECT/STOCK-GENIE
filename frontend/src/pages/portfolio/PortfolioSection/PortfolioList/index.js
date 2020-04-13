import React, { useEffect, useState } from 'react';
import PortfolioListItem from '../PorfolioListItem';
import styled from 'styled-components';
import PortfolioAddModal from '../PortfolioAddModal';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function PortfolioList(props) {
  // TODO: 나중에 스토어 + API 요청으로 뺄것
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    let sampleDatas = [];
    const now = new Date();
    for (let i = 1; i < 20; i++) {
      sampleDatas.push({
        id: i, // 고유 아이디
        name: `포트폴리오 - ${i}`, // 포폴 제목
        profit: {
          now: ((Math.random() - 0.5) * 100).toFixed(1), //수익률
          prev: ((Math.random() - 0.5) * 100).toFixed(1), // 전날
        },
        tags: [
          {
            id: 1,
            tag: '챌린지!',
          },
          {
            id: 2,
            tag: '#삼성전자',
          },
        ],
        date: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
      });
    }

    setPortfolios(sampleDatas);
  }, []);

  return (
    <ListWrapper>
      <PortfolioAddModal />
      {portfolios.map((portfolio) => (
        <PortfolioListItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </ListWrapper>
  );
}

export default PortfolioList;
