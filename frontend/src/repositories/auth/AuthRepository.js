import axios from 'axios';

class AuthRepository {
  URL = 'http://52.78.142.77:8000/auth';

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
