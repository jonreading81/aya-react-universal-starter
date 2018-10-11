import { clientConfiguration } from 'universal-webpack';
import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import baseConfiguration from './webpack.config.client';

const configuration = clientConfiguration(baseConfiguration, settings, {
  development : false,
  useMiniCssExtractPlugin : true
});

export default client(configuration, settings);
