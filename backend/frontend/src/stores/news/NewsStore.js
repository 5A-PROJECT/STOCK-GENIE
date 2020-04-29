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
      return this.newsData.newses.map((data, i) => ({
        news: data.news,
        link: data.link,
        result: data.result,
      }));
    }
    return null;
  }

  get goodNewses() {
    if (this.newsData) {
      return this.newsData.newses.filter((news) => news.result === 1);
    } else return [];
  }

  get badNewses() {
    if (this.newsData) {
      return this.newsData.newses.filter((news) => news.result === 0);
    } else return [];
  }

  get goodBadData() {
    return [
      {
        id: 'GOOD',
        label: '호재',
        value: this.newsData.good,
      },
      {
        id: 'BAD',
        label: '악재',
        value: this.newsData.bad,
      },
    ];
  }

  getNews = async (keyword = 'LG') => {
    this.loading['getNews'] = true;
    try {
      const res = await NewsRepository.getNews(keyword);
      let tmpData = [];

      const descriptions = res.data.descriptions;
      const newses = res.data.news;
      const links = res.data.links;
      const results = res.data.results;
      const good = res.data.good;
      const bad = res.data.bad;

      for (let i = 0; i < res.data.news.length; i++) {
        tmpData.push({
          news: newses[i],
          link: links[i],
          result: results[i],
          description: descriptions[i],
        });
      }

      this.newsData = {
        good,
        bad,
        newses: tmpData,
      };
      this.wordData = res.data.words;
    } catch (e) {
      console.log(e);
    }

    this.loading['getNews'] = false;
  };

  clearNewsData = () => {
    this.newsData = null;
    this.wordData = null;
  };
}

decorate(NewsStore, {
  newsData: observable,
  wordData: observable,
  loading: observable,
  formatedNewsData: computed,
  goodNewses: computed,
  badNewses: computed,
  goodBadData: computed,
  getNews: action,
  clearNewsData: action,
});
