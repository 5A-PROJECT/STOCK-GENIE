import AuthStore from './auth/AuthStore';

export default class RootStore {
  authStore = new AuthStore(this);
}
