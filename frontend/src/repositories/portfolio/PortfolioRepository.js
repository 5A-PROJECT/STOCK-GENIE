import axios from 'axios';

class PortfolioRepository {
  URL = 'http://localhost:8000/portfolio';
  constructor(url) {
    this.URL = url || this.URL;
  }

  /**
   * @param {object} portfolioForm 생성할 포폴 Form
   * @param {string} token 요청을 보내는 유저의 토큰
   */
  createPortfolio(portfolioForm, token) {
    return axios.post(
      `${this.URL}/`,
      {
        name: portfolioForm.name,
      },
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      },
    );
  }

  /**
   * @param {string} portfolioId 가져올 portfolio의 Id
   * @param {string} token 요청을 보내는 유저의 토큰
   */
  getPortfolioById(portfolioId, token) {
    return axios.get(`${this.URL}/${portfolioId}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }

  /**
   * @param {string} token 요청을 보내는 유저의 token
   */
  getPortfolios(token) {
    return axios.get(`${this.URL}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }

  /**
   * @param {string} portfolioId stock이 들어가는 포트폴리오 아이디
   * @param {Object} stock 생성될 stock form
   * @param {string} token 요청을 보내는 유저의 token
   */
  createStock(portfolioId, stock, token) {
    return axios.post(`${this.URL}/${portfolioId}/stock/`, stock, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }
}

export default new PortfolioRepository();
