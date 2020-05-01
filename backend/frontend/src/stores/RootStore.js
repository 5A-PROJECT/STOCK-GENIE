import AuthStore from './auth/AuthStore';
import PortfolioStore from './portfolio/PortfolioStore';
import NewsStore from './news/NewsStore';
import PredictStore from './predict/PredictStore';

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.portfolioStore = new PortfolioStore(this);
    this.newsStore = new NewsStore(this);
    this.predictStore = new PredictStore(this);
  }
}
