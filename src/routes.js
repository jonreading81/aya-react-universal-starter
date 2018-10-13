import React from 'react';
import Loadable from 'react-loadable';
import Home from './components/presentation/Home/Home';
import Article from './components/containers/Article';

const Loading = () => <h2>Loading</h2>;

const Articles = Loadable({
  loader: () => import(/* webpackChunkName: "articles" */ './components/presentation/Articles/Articles'),
  loading: Loading,
});

export { Articles, Home, Article };
