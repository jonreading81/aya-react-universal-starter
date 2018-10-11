import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import * as Routes from './routes';
import './scss/main.scss';

const App = () => (
  <div>
    <h1>Hello I am Amys Aya!  </h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/articles">Article</NavLink>
    <Switch>
      <Route exact path="/" component={Routes.Home} />
      <Route path="/articles" component={Routes.Articles} />
    </Switch>
  </div>
);

export default hot(module)(App);
