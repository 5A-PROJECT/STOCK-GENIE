import { decorate, observable } from 'mobx';

export default class PortfolioStore {
  constructor(root) {
    this.root = root;
  }
  /**
   * observable
   */
  portfolios = []; // 유저의 현재 포트폴리오들
  portfolioForm = {
    // 생성시 필요한 폼
    name: '',
  };
  currentPortfolio = {
    // 선택된 포트폴리오
    id: null,
    name: '',
    tags: [], // 포트폴리오가 가진 태그들
    stocks: [], // 포트폴리오가 가지는 주식 상품들(코드만?)
    createdAt: null,
  };

  create = () => {};
}

decorate(PortfolioStore, {
  portfolioForm: observable,
});
