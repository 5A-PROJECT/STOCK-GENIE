import { observable, action, decorate } from 'mobx';

export default class AuthStore {
  constructor(root) {
    this.root = root;
  }

  loginForm = {
    username: '',
    passowrd: '',
  };

  registerForm = {
    username: '',
    password: '',
    email: '',
    age: null,
  };

  handleLoginForm() {
    console.log('action');
  }
}

decorate(AuthStore, {
  loginForm: observable,
  registerForm: observable,
  handleLoginForm: action,
});
