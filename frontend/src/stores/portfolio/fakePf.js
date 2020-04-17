const now = new Date();

export const fakePf = [
  {
    id: 1, // 고유 아이디
    name: `포트폴리오 - 1`, // 포폴 제목
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
    createdAt: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
    stocks: [
      {
        id: 1,
        name: '삼성전자',
        count: 10,
        code: '005930',
        buy_price: 48000,
        current_price: 48700,
        currency: 'KRW',
      },
      {
        id: 2,
        name: '카카오',
        count: 20,
        code: '035720',
        buy_price: 130000,
        current_price: 159000,
        currency: 'KRW',
      },
    ],
    totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
    totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
    totalProfit: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
    totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
  },
  {
    id: 2, // 고유 아이디
    name: `포트폴리오 - 2`, // 포폴 제목
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
    createdAt: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
    stocks: [
      {
        id: 3,
        name: 'Berkshire Hathaway Inc. B',
        count: 2,
        code: 'BRK-B',
        buy_price: 206.77 * 1170,
        current_price: 193.84 * 1170,
        currency: 'USD',
      },
      {
        id: 4,
        name: 'Facebook Inc.',
        count: 2,
        code: 'FB',
        buy_price: 176.82 * 1170,
        current_price: 175.19 * 1170,
        currency: 'USD',
      },
      {
        id: 5,
        name: 'Dropbox Inc.',
        count: 8,
        code: 'DBX',
        buy_price: 29.18 * 1170,
        current_price: 18.06 * 1170,
        currency: 'USD',
      },
      {
        id: 6,
        name: '카카오페이 IT펀드',
        count: 1,
        code: 'null',
        buy_price: 1000000,
        current_price: 1048268,
        currency: 'USD',
      },
    ],
    totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
    totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
    totalProfit: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
    totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
  },
  {
    id: 3, // 고유 아이디
    name: `포트폴리오 - 3`, // 포폴 제목
    tags: [
      {
        id: 1,
        tag: '챌린지!',
      },
    ],
    createdAt: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
    stocks: [],
    totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
    totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
    totalProfit: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
    totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
  },
];
