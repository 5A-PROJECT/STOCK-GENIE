import { decorate, action, observable, computed } from 'mobx';
import PredictRepository from '../../repositories/predict/PredictRepository';

export default class PredictStore {
  constructor(root) {
    this.root = root;
  }

  stockTable = [];
  predictData = null;
  selectedIndex = 'KOSPI';
  selectedStock = null;
  loading = {
    getTableData: false,
    getPredictData: false,
  };

  get salesFormatedData() {
    if (this.predictData) {
      return [
        {
          name: '시가총액',
          시가총액: this.predictData.base['Market Cap'] / 1000,
        },
        {
          name: '매출',
          매출: this.predictData.base['Revenue'] / 1000,
        },
      ];
    } else return null;
  }

  get tradeAmountFormatedData() {
    if (this.predictData) {
      return [
        {
          name: '거래량',
          거래량: this.predictData.base['Volume'],
        },
        {
          name: '평균거래량',
          평균거래량: this.predictData.base['Average Vol. (3m)'],
        },
      ];
    } else return null;
  }

  get fluctuationFormatedData() {
    if (this.predictData) {
      console.log(this.predictData, '??');
      const today = this.predictData.base['Todays Range'];
      const [past, now] = today.split('-');
      const week = this.predictData.base['52 wk Range'];

      return [
        {
          id: '52주 변동폭',
          data: [
            {
              x: '과거',
              y: 130,
            },
            {
              x: '최근',
              y: 213,
            },
          ],
        },
        {
          id: '금일 변동폭',
          data: [
            {
              x: '과거',
              y: parseInt(past),
            },
            {
              x: '최근',
              y: parseInt(now),
            },
          ],
        },
      ];
    } else return null;
  }

  getTableData = async (index) => {
    const { token } = this.root.authStore;
    this.loading['getTableData'] = true;
    try {
      const res = await PredictRepository.getStockTable(index, token);
      this.stockTable = res.data;
    } catch (e) {
      console.log(e);
    }
    this.loading['getTableData'] = false;
  };

  getPredictData = async () => {
    const { token } = this.root.authStore;
    this.loading['getPredictData'] = true;
    try {
      const res = await PredictRepository.getStockPredict(
        this.selectedStock.code,
        this.selectedStock.country,
        token,
      );
      this.predictData = res.data;
    } catch (e) {
      console.log(e);
    }
    this.loading['getPredictData'] = false;
  };

  setSelectedIndex = (index) => {
    this.selectedIndex = index;
  };

  setSelectedStock = (stock) => {
    this.selectedStock = stock;
  };

  clearSelectedStock = () => {
    this.selectedStock = null;
    this.predictData = null;
  };
}

decorate(PredictStore, {
  stockTable: observable,
  selectedIndex: observable,
  predictData: observable,
  selectedStock: observable,
  loading: observable,
  salesFormatedData: computed,
  tradeAmountFormatedData: computed,
  fluctuationFormatedData: computed,
  getTableData: action,
  setSelectedIndex: action,
  setSelectedStock: action,
  clearSelectedStock: action,
});
