import { setLocalStorage, getLocalStorage } from './localStorage';

const checkAuth = () => {
  if (getLocalStorage('auth') == null) return false;
  return true;
};

const setAuth = value => {
  setLocalStorage('auth', value);
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

const getToken = () => {
  return JSON.parse(localStorage.getItem('auth'))?.value;
};

export { checkAuth, setAuth, removeAuth, getToken };
