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
        good: data.good,
        bad: data.bad,
      }));
    }
    return null;
  }

  getNews = async (keyword = 'LG') => {
    this.loading['getNews'] = true;
    const { token } = this.root.authStore;
    try {
      const res = await NewsRepository.getNews(token, keyword);
      let tmpData = [];
      const news = res.data.news;
      const link = res.data.links;
      const result = res.data.results;
      const good = res.data.good;
      const bad = res.data.bad;

      for (let i = 0; i < res.data.news.length; i++) {
        tmpData.push({
          news: news[i],
          link: link[i],
          result: result[i],
          good: good,
          bad: bad,
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
  wordData: observable,
  loading: observable,
  formatedNewsData: computed,
  getNews: action,
});
