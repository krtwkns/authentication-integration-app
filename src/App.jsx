import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { privateRoutes, loginRoutes } from './routes';
import { PrivateRoute, LoginRoute } from './routes/redirect-route';

const App = () => (
  <Router>
    <Switch>
      {privateRoutes.map((item, index) => (
        <PrivateRoute
          key={index}
          path={item.path}
          component={item.page}
          exact
        />
      ))}
      {loginRoutes.map((item, index) => (
        <LoginRoute key={index} path={item.path} component={item.page} exact />
      ))}
    </Switch>
  </Router>
);

export default App;
