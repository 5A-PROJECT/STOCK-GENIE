import AuthStore from './auth/AuthStore';
import PortfolioStore from './portfolio/PortfolioStore';
import NewsStore from './news/NewsStore';

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.portfolioStore = new PortfolioStore(this);
    this.newsStore = new NewsStore(this);
  }
}
