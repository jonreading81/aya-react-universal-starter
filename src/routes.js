import React from 'react';
import Loadable from 'react-loadable';
import Home from './components/presentation/Home/Home';

const Loading = () => <h2>Loading</h2>;

const Articles = Loadable({
  loader: () => import('./components/presentation/Articles/Articles'),
  loading: Loading,
});

export { Articles, Home };
