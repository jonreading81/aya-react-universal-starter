/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import App from '../src/App';

const Html = (props) => {
  const { assets, url, store } = props;
  const head = Helmet.rewind();

  return (
    <html lang="en">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {Object.keys(assets.styles).map((style, key) => (
          <link href={assets.styles[style]} key={key} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
        ))}
      </head>
      <body>
        <div id="root">
          <Provider store={store}>
            <StaticRouter location={url} context={{}}>
              <App />
            </StaticRouter>
          </Provider>
        </div>
        {Object.keys(assets.javascript).map((javascript, key) => (
          <script src={`${assets.javascript[javascript]}`} key={key} />
        ))}
      </body>
    </html>
  );
};

Html.propTypes = {
  store: PropTypes.any.isRequired,
  assets: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
};

export default Html;
