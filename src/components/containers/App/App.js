import React from 'react';
import { NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';
import '../../../scss/main.scss';

const App = (props) => {
  const { route } = props;
  return (
    <div>
      <h1>Hello I am Amys Aya!  </h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/article">article</NavLink></li>
      </ul>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default hot(module)(App);
