import AuthStore from './auth/AuthStore';
import PortfolioStore from './portfolio/PortfolioStore';

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.portfolioStore = new PortfolioStore(this);
  }
}
