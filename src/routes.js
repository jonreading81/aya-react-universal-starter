import React from 'react';
import Loadable from 'react-loadable';
import Home from './components/presentation/Home/Home';
import Article from './components/containers/Article';
import App from './components/containers/App/App';

const Loading = () => <h2>Loading</h2>;

const Articles = Loadable({
  loader: () => import(/* webpackChunkName: "articles" */ './components/presentation/Articles/Articles'),
  loading: Loading,
});

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/articles',
        component: Articles,
      },
      {
        path: '/article/:id',
        component: Article,
      },
    ],
  },
];

export default routes;
