import { decorate, observable, action } from 'mobx';
import PortfolioRepository from '../../repositories/portfolio/PortfolioRepository';

const now = new Date();

export default class PortfolioStore {
  constructor(root) {
    this.root = root;
  }
  /**
   * observable
   */
  portfolios = [
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
      totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
      totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
      totalProfit2: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
      totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
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
      totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
      totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
      totalProfit2: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
      totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
    },
    {
      id: 3, // 고유 아이디
      name: `포트폴리오 - 3`, // 포폴 제목
      totalProfit: {
        now: ((Math.random() - 0.5) * 100).toFixed(1), //수익률
        prev: ((Math.random() - 0.5) * 100).toFixed(1), // 전날
      },
      tags: [
        {
          id: 1,
          tag: '챌린지!',
        },
      ],
      date: `${now.getMonth()}월 ${now.getDate()}일, ${now.getFullYear()}`,
      stocks: [],
      totalBuyingPrice: 1000000, // stocks 전체의 buy_price * count 합
      totalCurrentPrice: 2000000, // stocks 전체의 current_price * count 합
      totalProfit2: 2000000 - 1000000, // totalBuyingPrice - totalCurrentPrice,
      totalRatio: (((2000000 - 1000000) / 1000000) * 100).toFixed(2), // ((totalProfit / totalBuyingPrice) * 100)
    },
  ]; // 유저의 현재 포트폴리오들
  selectedPortfolio = null;
  portfolioForm = {
    // 생성시 필요한 폼
    name: '',
  };

  /**
   * 현재 선택된 포폴 정리
   */
  clearSelectedPortfolio = () => {
    this.selectedPortfolio = null;
  };

  /**
   * 본인의 전체 포폴리스트 가져오기
   */
  getMyPortfolios = async (userId) => {
    try {
    } catch (e) {}
  };

  /**
   * 해당 아이디 포폴 가져오기
   */
  getPortfolioById = async (portfolioId) => {
    try {
      // TODO : API 요청해서 해당 포폴 가져오기
      this.selectedPortfolio = this.portfolios[portfolioId];
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  addPortfolilo = async (portfolio, token) => {
    try {
      const res = await PortfolioRepository.createPortfolio(portfolio, token);
      this.portfolios.push(portfolio);
    } catch (e) {
      console.log(e);
    }
  };

  addStock = async (portfolioId, stock, token) => {
    try {
      // TODO : API로 create 보내고, 리턴받은 아이디 받아서 넣기
      const res = await PortfolioRepository.createStock(
        portfolioId,
        stock,
        token,
      );
      this.selectedPortfolio.stocks.push({
        id: 3,
        ...stock,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

decorate(PortfolioStore, {
  portfolios: observable,
  selectedPortfolio: observable,
  portfolioForm: observable,
  create: action,
  clearSelectedPortfolio: action,
  getMyPortfolios: action,
  getPortfolioById: action,
  addStock: action,
});
