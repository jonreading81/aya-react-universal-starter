/* eslint-disable no-console */
import React from 'react';
import Loadable from 'react-loadable';
import express from 'express';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import path from 'path';
import serialize from 'serialize-javascript';
import { getBundles } from 'react-loadable/webpack';
import stats from '../build/static/react-loadable.json';
import Html from './Html';
import App from '../src/App';
import reducers from '../src/redux/reducers';

const getAppContent = (store, url, loadableCaptureReport) => (
  renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <Loadable.Capture report={loadableCaptureReport}>
          <App />
        </Loadable.Capture>
      </StaticRouter>
    </Provider>,
  )
);

export default function startServer({ chunks }) {
  const app = express();
  const assets = chunks();
  app.use(express.static(path.resolve('./build/static')));

  app.get('*', (req, res) => {
    const store = createStore(reducers);
    const loadedModules = [];

    /* used to create bundles for code splitting */
    const loadableCaptureReport = module => loadedModules.push(module);
    const appContent = getAppContent(store, req.url, loadableCaptureReport);
    const bundles = getBundles(stats, loadedModules);
    console.log(loadedModules);
    const htmlContent = renderToString(
      <Html
        bundles={bundles}
        assets={assets}
        appContent={appContent}
        serialisedState={serialize(store.getState())}
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
