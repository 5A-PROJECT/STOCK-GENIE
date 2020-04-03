import { observable, action, decorate } from 'mobx';
import axios from 'axios';

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
    age: 20,
  };

  constructor(root) {
    this.root = root;
  }

  clearAuthForm = () => {
    this.authForm = {
      username: '',
      password: '',
      email: '',
      age: null,
    };
  };

  login = async () => {
    // 로그인 API 요청
    /*
    const res = await axios.post(
      'http://localhost:8080/api/v1/auth/login',
      {
        username: this.authForm.username,
        password: this.authForm.password
      },
    );
    */

    // TODO: 반환된 응답을 보고 로그인 여부 토글
    this.isLoggedIn = true;
  };

  register = async () => {
    // 회원가입 API 요청
    /*
    const res = await axios.post(
      'http://localhost:8080/api/v1/auth/register',
      this.authForm,
    );
    */

    // TODO: 반환된 응답을 보고 로그인 여부 토글
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
