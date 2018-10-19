/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Stylesheet = ({ href }) => {
  if (href) {
    return <link rel="stylesheet" type="text/css" href={href} />;
  }
  return '';
};

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
        <Stylesheet href={assets.styles.main} />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: appContent.toString() }} />
        <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialisedState};` }} charSet="UTF-8" />

        {bundles.map(bundle => <script key={bundle.file} src={`${bundle.publicPath}`} />)}
        <script type="module" src={`${assets.javascript.vendor}`} />
        <script type="module" src={`${assets.javascript.main}`} />
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
