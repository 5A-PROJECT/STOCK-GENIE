import { decorate, observable, action, computed } from 'mobx';
import PortfolioRepository from '../../repositories/portfolio/PortfolioRepository';

export default class PortfolioStore {
  constructor(root) {
    this.root = root;
  }
  /**
   * observable
   */
  portfolios = []; // 유저의 현재 포트폴리오들
  count = null;
  loading = {
    getMyPortfolios: false,
    addPortfolilo: false,
    getPortfolioById: false,
    addStock: false,
  };
  selectedPortfolio = null;

  /**
   * computed
   */
  get stocks() {
    if (this.selectedPortfolio) {
      return this.selectedPortfolio.stocks.filter(
        (stock) => stock.category === 'STOCK',
      );
    } else {
      return null;
    }
  }
  get derivatives() {
    if (this.selectedPortfolio) {
      return this.selectedPortfolio.stocks.filter(
        (stock) => stock.category === 'DERIVATIVES',
      );
    } else {
      return null;
    }
  }

  /**
   * 현재 선택된 포폴 정리
   */
  clearSelectedPortfolio = () => {
    this.selectedPortfolio = null;
  };

  /**
   * 본인의 전체 포폴리스트 가져오기
   */
  getMyPortfolios = async () => {
    this.loading['getMyPortfolios'] = true;
    const { token } = this.root.authStore;
    try {
      const res = await PortfolioRepository.getPortfolios(token);
      const { data, count } = res.data;
      this.portfolios = data;
      this.count = count;
    } catch (e) {
      console.log(e);
    }
    this.loading['getMyPortfolios'] = false;
  };

  /**
   * 포폴 추가하기
   */
  addPortfolilo = async (portfolio) => {
    let isAdded = true;
    this.loading['addPortfolilo'] = true;
    const { token } = this.root.authStore;
    try {
      const res = await PortfolioRepository.createPortfolio(portfolio, token);
      const { id, created_at } = res.data;
      this.portfolios.push({
        id,
        created_at,
        ...portfolio,
      });
    } catch (e) {
      console.log(e);
      isAdded = false;
    }
    this.loading['addPortfolilo'] = false;
    return isAdded;
  };

  /**
   * 해당 아이디 포폴 가져오기
   */
  getPortfolioById = async (portfolioId) => {
    let isPortfolioExist = true;
    this.loading['getPortfolioById'] = true;
    try {
      const { token } = this.root.authStore;
      const res = await PortfolioRepository.getPortfolioById(
        portfolioId,
        token,
      );

      // TODO: 받은 응답의 포폴로 교체하기.
      this.selectedPortfolio = res.data;
    } catch (e) {
      console.log(e);
      isPortfolioExist = false;
    }
    this.loading['getPortfolioById'] = false;
    return isPortfolioExist;
  };

  addStock = async (stock) => {
    this.loading['addStock'] = true;
    const { token } = this.root.authStore;
    const { id: portfolioId } = this.selectedPortfolio;
    let isAdded = true;
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

      // TODO : 요청 다시 받으면 해당 정보로 profit 교체
      const calcRes = await PortfolioRepository.updateCalcFields(
        portfolioId,
        token,
      );

      const { data } = calcRes;

      this.selectedPortfolio.profit = data;
    } catch (e) {
      isAdded = false;
      console.log(e);
    }
    this.loading['addStock'] = false;
    return isAdded;
  };

  addTag = async (tag) => {
    const { token } = this.root.authStore;
    const { id: portfolioId } = this.selectedPortfolio;
    try {
      const res = await PortfolioRepository.createTag(portfolioId, tag, token);
      const { id: tagId } = res.data;
      this.selectedPortfolio.tags.push({ id: tagId, name: tag.name });
    } catch (e) {
      console.log(e);
    }
  };
}

decorate(PortfolioStore, {
  portfolios: observable,
  count: observable,
  loading: observable,
  selectedPortfolio: observable,
  stocks: computed,
  derivatives: computed,
  create: action,
  clearSelectedPortfolio: action,
  getMyPortfolios: action,
  getPortfolioById: action,
  addStock: action,
  addTag: action,
});
