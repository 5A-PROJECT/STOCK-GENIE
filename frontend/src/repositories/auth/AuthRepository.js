import axios from 'axios';

class AuthRepository {
  URL = 'http://localhost:8080/api/v1/auth';

  constructor(url) {
    this.URL = url || this.URL;
  }

  login(authForm) {
    // 로그인 API 요청
    return axios.post(`${this.URL}/login`, {
      username: authForm.username,
      password: authForm.password,
    });
  }

  register(authForm) {
    // 회원가입 API 요청
    return axios.post(`${this.URL}/register`, authForm);
  }

  checkToken(token) {
    return axios.post(`${this.URL}/check`, {
      header: {
        Authorization: token,
      },
    });
  }
}

export default new AuthRepository();
