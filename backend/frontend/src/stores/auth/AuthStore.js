import { observable, action, decorate, reaction } from 'mobx';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class AuthStore {
  token = window.sessionStorage.getItem('access_token');
  // 로그인 여부
  isLoggedIn = false;
  loading = false;
  loggedInUser = {
    id: null,
    username: '',
  };

  // 로그인 / 회원가입용 폼
  authForm = {
    username: '',
    password: '',
    email: '',
  };

  constructor(root) {
    this.root = root;

    if (this.token) {
      // TODO : 나중에수정하셈
      // this.check(this.token);
      this.isLoggedIn = true;
    }

    reaction(
      () => this.token,
      (token) => {
        if (token != null) window.sessionStorage.setItem('access_token', token);
      },
    );
  }

  clearAuthForm = () => {
    this.authForm = {
      username: '',
      password: '',
      email: '',
    };
  };

  login = async (authForm) => {
    this.loading = true;
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      const res = await AuthRepository.login(authForm);
      const { token, id } = res.data;
      sessionStorage.setItem('access_token', token);
      this.token = token;
      this.isLoggedIn = true;
      this.loggedInUser = {
        id,
        username: authForm.username,
      };
    } catch (e) {
      alert('존재하지 않는 사용자입니다.');
    }

    this.loading = false;
  };

  register = async (authForm) => {
    this.loading = true;
    // TODO: 반환된 응답을 보고 로그인 여부 토글
    try {
      if (!this.authformValidation()) {
        alert('올바르지 않은 폼 형식입니다.');
      }
      const res = await AuthRepository.register(authForm);
      const { token } = res.data;
      sessionStorage.setItem('access_token', token);
      this.isLoggedIn = true;
    } catch (e) {
      alert('잘못된 형식 또는 중복된 사용자명입니다.');
    }
    this.loading = false;
  };

  check = async (token) => {
    this.loading = true;
    try {
      const res = await AuthRepository.checkToken(token);
      // 올바른 토큰이라면
      const { id, username } = res.data;
      this.isLoggedIn = true;
      this.loggedInUser = {
        id,
        username,
      };
    } catch (e) {
      console.log(e);
      this.logout();
    }
    this.loading = false;
  };

  logout = () => {
    sessionStorage.removeItem('access_token');
    this.isLoggedIn = false;
    this.loggedInUser = {
      id: null,
      username: null,
    };
  };

  authformValidation = () => {
    const { email, password, username } = this.authForm;
    if (email === '') return false;
    if (password === '') return false;
    if (username === '') return false;
    if (!email.includes('@')) return false;
    return true;
  };
}

decorate(AuthStore, {
  isLoggedIn: observable,
  loggedInUser: observable,
  authForm: observable,
  loading: observable,
  clearAuthForm: action,
  login: action,
  register: action,
  logout: action,
});
