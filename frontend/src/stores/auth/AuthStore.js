import { observable, action, decorate } from 'mobx';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class AuthStore {
  // 로그인 여부
  isLoggedIn = false;

  // AuthLoading
  loading = false;

  // 사용하는 컴포넌트의 history
  history = null;

  // 로그인 시 로그인된 유저
  loggedInUser = {
    id: null,
    username: null,
  };

  // 로그인 / 회원가입용 폼
  authForm = {
    username: '',
    password: '',
    email: '',
  };

  constructor(root) {
    this.root = root;
  }

  clearAuthForm = () => {
    this.authForm = {
      username: '',
      password: '',
      email: '',
    };
  };

  setLoading = (state) => {
    this.loading = state;
  };

  setHistory = (history) => {
    this.history = history;
  };

  login = async (authForm) => {
    this.setLoading(true);
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      const res = await AuthRepository.login(authForm);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    this.isLoggedIn = true;
    this.setLoading(false);
    this.history.push('/');
  };

  register = async (authForm) => {
    this.setLoading(true);
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      const res = await AuthRepository.register(authForm);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    this.isLoggedIn = true;
    this.setLoading(false);
    this.history.push('/');
  };

  check = async (token) => {
    this.setLoading(true);
    try {
      const res = await AuthRepository.checkToken(token);
      console.log(res);
      // 올바른 토큰이라면
    } catch (e) {
      console.log(e);
    }
    this.isLoggedIn = true;
    this.setLoading(false);
    this.history.push('/');
  };

  logout = () => {
    sessionStorage.removeItem('access_token');
    this.isLoggedIn = false;
    this.loggedInUser = {
      id: null,
      username: null,
    };
    this.history.push('/');
  };
}

decorate(AuthStore, {
  isLoggedIn: observable,
  loggedInUser: observable,
  authForm: observable,
  loading: observable,
  history: observable,
  setLoading: action,
  setHistory: action,
  clearAuthForm: action,
  login: action,
  register: action,
  logout: action,
});
