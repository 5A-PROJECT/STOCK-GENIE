import { decorate, observable, action } from 'mobx';
import PortfolioRepository from '../../repositories/portfolio/PortfolioRepository';
import { fakePf } from './fakePf';

export default class PortfolioStore {
  constructor(root) {
    this.root = root;
  }
  /**
   * observable
   */
  portfolios = []; // 유저의 현재 포트폴리오들
  selectedPortfolio = null;

  /**
   * 현재 선택된 포폴 정리
   */
  clearSelectedPortfolio = () => {
    this.selectedPortfolio = null;
  };

  /**
   * 본인의 전체 포폴리스트 가져오기
   */
  getMyPortfolios = async (token) => {
    try {
      this.portfolios = fakePf;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 해당 아이디 포폴 가져오기
   */
  getPortfolioById = async (portfolioId, token) => {
    try {
      /* API 완료 후 수정
      const res = await PortfolioRepository.getPortfolioById(
        portfolioId,
        token,
      );

      const { data: portfolio } = res.data;
      */

      // TODO: 받은 응답의 포폴로 교체하기.
      this.selectedPortfolio = fakePf[portfolioId - 1];
      return true;
    } catch (e) {
      alert(e);
      return false;
    }
  };

  addPortfolilo = async (portfolio, token) => {
    try {
      const res = await PortfolioRepository.createPortfolio(portfolio, token);
      const { id, createdAt } = res.data;
      this.portfolios.push({
        id,
        createdAt,
        ...portfolio,
      });
    } catch (e) {
      alert(e);
    }
  };

  addStock = async (portfolioId, stock, token) => {
    try {
      const res = await PortfolioRepository.createStock(
        portfolioId,
        stock,
        token,
      );

      // 리턴받은 아이디 받아서 넣기
      const { id } = res.data;

      // 추가
      this.selectedPortfolio.stocks.push({
        id,
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
  create: action,
  clearSelectedPortfolio: action,
  getMyPortfolios: action,
  getPortfolioById: action,
  addStock: action,
});
