import { clientConfiguration } from 'universal-webpack';
import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfiguration from './webpack.config';
import path from 'path';

const configuration = clientConfiguration(baseConfiguration, settings, {
  development : false,
  useMiniCssExtractPlugin : true
});

export default client(configuration, settings);
