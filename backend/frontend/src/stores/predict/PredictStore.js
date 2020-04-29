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
  stockRealAndPredictData = null;
  loading = {
    getTableData: false,
    getPredictData: false,
    getStockRealAndPredictData: false,
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
          name: '현재거래량',
          현재거래량: this.predictData.base['Volume'],
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
      const today = this.predictData.base['Todays Range'];
      const [todayPast, todayNow] = today.split('-');
      const week = this.predictData.base['52 wk Range'];
      const [weekPast, weekNow] = week.split('-');
      return [
        {
          id: '52주 변동폭',
          data: [
            {
              x: '과거',
              y: parseInt(weekPast.replace(',', '').replace(',', '')),
            },
            {
              x: '최근',
              y: parseInt(weekNow.replace(',', '').replace(',', '')),
            },
          ],
        },
        {
          id: '금일 변동폭',
          data: [
            {
              x: '과거',
              y: parseInt(todayPast.replace(',', '').replace(',', '')),
            },
            {
              x: '최근',
              y: parseInt(todayNow.replace(',', '').replace(',', '')),
            },
          ],
        },
      ];
    } else return null;
  }

  get stockRealAndPredictFormatedData() {
    if (this.stockRealAndPredictData) {
      return [
        {
          id: '실제 주가',
          data: this.stockRealAndPredictData['real'].map((data) => ({
            x: data['time'],
            y: data['value'],
          })),
        },
        {
          id: '예측 주가',
          data: this.stockRealAndPredictData['predict'].map((data) => ({
            x: data['time'],
            y: data['value'],
          })),
        },
      ];
    } else
      return [
        {
          id: '실제 주가',
          data: [],
        },
        {
          id: '예측 주가',
          data: [],
        },
      ];
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

  getStockRealAndPredictData = async () => {
    const { token } = this.root.authStore;
    this.loading['getStockRealAndPredictData'] = true;
    try {
      const res = await PredictRepository.getStockRealAndPredict(
        this.selectedStock.code,
        this.selectedStock.country,
        this.selectedIndex,
        token,
      );

      this.stockRealAndPredictData = res.data;
    } catch (e) {
      console.log(e);
    }
    this.loading['getStockRealAndPredictData'] = false;
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
    this.stockRealAndPredictData = null;
  };
}

decorate(PredictStore, {
  stockTable: observable,
  selectedIndex: observable,
  predictData: observable,
  selectedStock: observable,
  loading: observable,
  stockRealAndPredictData: observable,
  salesFormatedData: computed,
  tradeAmountFormatedData: computed,
  fluctuationFormatedData: computed,
  stockRealAndPredictFormatedData: computed,
  getTableData: action,
  getStockRealAndPredictData: action,
  setSelectedIndex: action,
  setSelectedStock: action,
  clearSelectedStock: action,
});
