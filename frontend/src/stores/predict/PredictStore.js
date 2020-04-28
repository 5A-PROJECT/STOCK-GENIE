import { decorate, action, observable } from 'mobx';
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
  getTableData: action,
  setSelectedIndex: action,
  setSelectedStock: action,
  clearSelectedStock: action,
});
