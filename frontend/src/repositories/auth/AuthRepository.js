import axios from 'axios';
import { BASE_URL } from '../../constants';

class AuthRepository {
  URL = `${BASE_URL}/auth`;
  constructor(url) {
    this.URL = url || this.URL;
  }

  // 로그인
  login(authForm) {
    return axios.post(`${this.URL}/login/`, {
      username: authForm.username,
      password: authForm.password,
    });
  }

  // 회원가입
  register(authForm) {
    return axios.post(`${this.URL}/register/`, authForm);
  }

  // 토큰 유효성 검사
  checkToken(token) {
    return axios.get(`${this.URL}/check/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }
}

export default new AuthRepository();
