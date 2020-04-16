import axios from 'axios';

class PortfolioRepository {
  URL = 'http://localhost:8080/api/v1/portfolio';
  constructor(url) {
    this.URL = url || this.URL;
  }

  createPortfolio(portfolioForm, token) {
    return axios.post(
      `${this.URL}`,
      {
        name: portfolioForm.name,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  createStock(portfolioId, stock, token) {
    return axios.post(
      `${this.URL}/addstock`,
      {
        portfolioId,
        ...stock,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
}

export default new PortfolioRepository();
