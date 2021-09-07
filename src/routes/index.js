import Home from '../pages/home';
import Login from '../pages/login';
import Chat from '../pages/chat';
import Room from '../pages/room';
import HelloWorld from '../pages/hello-world';

const privateRoutes = [
  {
    path: '/',
    page: Home
  },
  {
    path: '/room',
    page: Room
  },
  {
    path: '/chat/:roomId',
    page: Chat
  },
  {
    path: '/hello-world',
    page: HelloWorld
  }
];

const loginRoutes = [
  {
    path: '/login',
    page: Login
  }
];

export { privateRoutes, loginRoutes };
