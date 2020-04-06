import { observable, action, decorate } from 'mobx';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class AuthStore {
  // 로그인 여부
  isLoggedIn = false;

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

  login = async (authForm) => {
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      const res = await AuthRepository.login(authForm);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    this.isLoggedIn = true;
  };

  register = async (authForm) => {
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      const res = await AuthRepository.register(authForm);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    this.isLoggedIn = true;
  };
}

decorate(AuthStore, {
  isLoggedIn: observable,
  loggedInUser: observable,
  authForm: observable,
  clearAuthForm: action,
  login: action,
  register: action,
});
