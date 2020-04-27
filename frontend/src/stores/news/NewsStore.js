import { observable, action, decorate, reaction } from 'mobx';
import NewsRepository from '../../repositories/news/NewsRepository';

export default class NewsStore {
  newsData = {
    descriptions: [],
    news: [],
    links: [],
    results: [],
    words: [],
  };

  getNews = async () => {
    this.loading = true;
    const { token } = this.root.authStore;
    const keyword = '삼성';
    try {
      const res = await NewsRepository.getNews(token, keyword);
      this.newsData = {
        descriptions: res.data.descriptions,
        news: res.data.news,
        links: res.data.links,
        results: res.data.results,
        words: res.data.words,
      };
    } catch (e) {
      console.log(e);
    }

    this.loading = false;
  };
}

decorate(NewsStore, {
  newsData: observable,
  getNews: action,
});
