import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import configuration from './webpack.config.client';
import appConfig from '../config';

configuration.mode = 'development';
configuration.output.publicPath = `http://${appConfig.webpack.devserver.host}:${appConfig.webpack.devserver.port}/`;
configuration.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  overlay: true,
};

export default client(configuration, settings);
