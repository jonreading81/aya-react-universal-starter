/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore(window.__data);

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
});
