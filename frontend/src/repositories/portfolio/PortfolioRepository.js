import axios from 'axios';

class PortfolioRepository {
  URL = 'http://localhost:8080/api/v1/portfolio';
  constructor(url) {
    this.URL = url || this.URL;
  }

  create(portfolioForm, token) {
    return axios.post(
      `${this.URL}/create`,
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
}

export default new PortfolioRepository();
