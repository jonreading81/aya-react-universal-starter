/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Html = (props) => {
  const {
    assets,
    bundles,
    appContent,
    serialisedState,
  } = props;
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
        {Object.keys(assets.styles).map(style => (
          <link key={style} href={assets.styles[style]} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: appContent.toString() }} />
        <script dangerouslySetInnerHTML={{__html: `window.__data=${serialisedState};`}} charSet="UTF-8"/>

        {bundles.map(bundle => <script key={bundle.file} src={`${bundle.publicPath}`} />)}
        <script src={`${assets.javascript.vendor}`} />
        <script src={`${assets.javascript.client}`} />
      </body>
    </html>
  );
};

Html.propTypes = {
  bundles: PropTypes.array.isRequired,
  assets: PropTypes.any.isRequired,
  serialisedState: PropTypes.string.isRequired,
  appContent: PropTypes.string.isRequired,
};

export default Html;
