import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReturnRatio from '../../molecules/ReturnRatio';
import StockList from './StockList';
import StockListHeader from './StockList/StockListHeader';

const PortfolioItemPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortfolioItemPage({ match, history }) {
  const { id } = match.params;
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // TODO : API 요청해서 해당 포폴 가져오기
    if (sample_portfolio[id]) {
      setPortfolio(sample_portfolio[id]);
    } else {
      // 없으면 홈으로 리다이렉트
      history.push('/');
    }
  }, [id, history]);

  return (
    <PortfolioItemPageWrapper>
      {portfolio && (
        <>
          <h1>{portfolio.name}</h1>
          <h5>{portfolio.date} 생성</h5>
          {/* 종목들이 있을때만 보이도록 */}
          {portfolio.stocks.length > 0 ? (
            <>
              <StockListHeader portfolio={portfolio} />
              <StockList stocks={portfolio.stocks} />
            </>
          ) : (
            <h2>포트폴리오에 종목을 추가해주세요!</h2>
          )}
        </>
      )}
    </PortfolioItemPageWrapper>
  );
}

const now = new Date();
const sample_portfolio = [
  {},
  {
    id: 1, // 고유 아이디
    name: `포트폴리오 - 1`, // 포폴 제목
    totalProfit: {
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
      {
        id: 3,
        tag: '카카오',
      },
    ],
    date: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
    stocks: [
      {
        id: 1,
        name: '삼성전자',
        count: 10,
        code: '005930',
        buy_price: 48000,
        current_price: 48700,
      },
      {
        id: 2,
        name: '카카오',
        count: 20,
        code: '035720',
        buy_price: 130000,
        current_price: 159000,
      },
    ],
  },
  {
    id: 2, // 고유 아이디
    name: `포트폴리오 - 2`, // 포폴 제목
    totalProfit: {
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
        tag: '#우량주',
      },
    ],
    date: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
    stocks: [
      {
        id: 3,
        name: 'Berkshire Hathaway Inc. B',
        count: 2,
        code: 'BRK-B',
        buy_price: 206.77 * 1170,
        current_price: 193.84 * 1170,
      },
      {
        id: 4,
        name: 'Facebook Inc.',
        count: 2,
        code: 'FB',
        buy_price: 176.82 * 1170,
        current_price: 175.19 * 1170,
      },
      {
        id: 5,
        name: 'Dropbox Inc.',
        count: 8,
        code: 'DBX',
        buy_price: 29.18 * 1170,
        current_price: 18.06 * 1170,
      },
      {
        id: 6,
        name: '카카오페이 IT펀드',
        count: 1,
        code: 'null',
        buy_price: 1000000,
        current_price: 1048268,
      },
    ],
  },
];

export default PortfolioItemPage;
