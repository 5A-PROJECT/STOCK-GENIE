import AuthStore from './auth/AuthStore';

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
  }
}
