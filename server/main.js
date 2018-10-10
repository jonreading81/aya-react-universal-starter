/* eslint-disable no-console */
import React from 'react';
import path from 'path';
import express from 'express';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import Html from './Html';
import reducers from '../src/redux/reducers';


export default function startServer({ chunks }) {
  const app = express();
  const assets = chunks();
  app.use(express.static(path.resolve('./build/static')));

  app.listen(3000, '0.0.0.0', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info('Listening at http://localhost:3000');
    }
  });

  app.get('*', (req, res) => {
    const store = createStore(reducers);
    const htmlContent = renderToString(<Html url={req.url} store={store} assets={assets} />);
    res.send(htmlContent);
  });
}
