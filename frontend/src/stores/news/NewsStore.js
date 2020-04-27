import { observable, action, decorate, reaction } from 'mobx';
import NewsRepository from '../../repositories/news/NewsRepository';

export default class NewsStore {
  constructor(root) {
    this.root = root;
  }

  loading = {
    getNews: false,
  };

  newsData = null;

  getNews = async (keyword = '삼성') => {
    this.loading['getNews'] = true;
    const { token } = this.root.authStore;

    try {
      console.log('store start');
      const res = await NewsRepository.getNews(token, keyword);
      console.log('store middle');
      this.newsData = res.data;
      console.log(this.newsData);
    } catch (e) {
      console.log(e);
    }
    this.loading['getNews'] = false;
  };
}

decorate(NewsStore, {
  newsData: observable,
  getNews: action,
});
