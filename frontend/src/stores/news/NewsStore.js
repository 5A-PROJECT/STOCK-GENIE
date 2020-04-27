import { observable, action, decorate, computed } from 'mobx';
import NewsRepository from '../../repositories/news/NewsRepository';

export default class NewsStore {
  constructor(root) {
    this.root = root;
  }

  loading = {
    getNews: false,
  };

  newsData = null;
  wordData = null;

  get formatedNewsData() {
    if (this.newsData) {
      return this.newsData.map((data, i) => ({
        news: data.news,
        link: data.link,
        result: data.result,
      }));
    }
    return null;
  }

  getNews = async (keyword = '삼성') => {
    this.loading['getNews'] = true;
    const { token } = this.root.authStore;
    try {
      const res = await NewsRepository.getNews(token, keyword);
      let tmpData = [];
      const news = res.data.news;
      const link = res.data.links;
      const result = res.data.results;

      for (let i = 0; i < res.data.news.length; i++) {
        tmpData.push({
          news: news[i],
          link: link[i],
          result: result[i],
        });
      }
      this.newsData = tmpData;
      this.wordData = res.data.words;
    } catch (e) {
      console.log(e);
    }

    this.loading['getNews'] = false;
  };
}

decorate(NewsStore, {
  newsData: observable,
  loading: observable,
  formatedNewsData: computed,
  getNews: action,
});
