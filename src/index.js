/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './App';
import configureStore from './redux/configureStore';

const store = configureStore(window.__data);

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
});
