import { BASE_URL } from '../../constants';
import axios from 'axios';

class PredictRepository {
  URL = `${BASE_URL}/predict`;
  constructor(url) {
    this.URL = url || this.URL;
  }

  getStockTable(index, token) {
    return axios.get(`${this.URL}/stocktable`, {
      params: {
        index: index.toUpperCase(),
      },
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }

  getStockPredict(code, country, token) {
    return axios.get(`${this.URL}/stockdetail/`, {
      params: {
        code,
        country,
      },
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }

  getStockRealAndPredict(code, country, index, token) {
    if (index === 'NASDAQ') {
      index = 'Nasdaq';
    }
    return axios.get(`${this.URL}/stock/`, {
      params: {
        code,
        country,
        index,
      },
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }
}

export default new PredictRepository();
