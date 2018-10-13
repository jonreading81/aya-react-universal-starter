import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Home, Articles, Article } from './routes';
import './scss/main.scss';

const App = () => (
  <div>
    <h1>Hello I am Amys Aya!  </h1>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/articles">Articles</NavLink></li>
      <li><NavLink to="/article">article</NavLink></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/article" component={Article} />
    </Switch>
  </div>
);

export default hot(module)(App);
