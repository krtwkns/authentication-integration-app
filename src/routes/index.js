import Home from '../pages/home';
import Login from '../pages/login';

const privateRoutes = [
  {
    path: '/',
    page: Home
  }
];

const loginRoutes = [
  {
    path: '/login',
    page: Login
  }
];

export { privateRoutes, loginRoutes };
