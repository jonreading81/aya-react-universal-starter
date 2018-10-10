/* eslint-disable no-console */
import React from 'react';
import Loadable from 'react-loadable';
import express from 'express';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { getBundles } from 'react-loadable/webpack';
import stats from '../build/static/react-loadable.json';
import Html from './Html';
import App from '../src/App';
import reducers from '../src/redux/reducers';

export default function startServer({ chunks }) {
  const app = express();
  const assets = chunks();
  app.use(express.static(path.resolve('./build/static')));

  app.get('*', (req, res) => {
    const store = createStore(reducers);
    const loadedModules = [];

    const appContent = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Loadable.Capture report={module => loadedModules.push(module)}>
            <App />
          </Loadable.Capture>
        </StaticRouter>
      </Provider>,
    );
    const bundles = getBundles(stats, loadedModules);

    const htmlContent = renderToString(
      <Html
        bundles={bundles}
        assets={assets}
        appContent={appContent}
      />,
    );

    res.send(htmlContent);
  });

  Loadable.preloadAll().then(() => {
    app.listen(3000, '0.0.0.0', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.info('Listening at http://localhost:3000');
      }
    });
  });
}
