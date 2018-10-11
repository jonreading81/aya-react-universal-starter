import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import configuration from './webpack.config.client';

configuration.mode = 'development';
configuration.output.publicPath = 'http://localhost:9000/';
configuration.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  overlay: true,
};

export default client(configuration, settings);
