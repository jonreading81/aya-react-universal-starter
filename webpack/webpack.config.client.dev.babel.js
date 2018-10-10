import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import configuration from './webpack.config';
const path = require('path');

const projectDir = path.resolve(__dirname, '..');

configuration.mode = 'development';
configuration.output.publicPath = 'http://localhost:9000/';
configuration.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  overlay: true,
};

configuration.plugins = [
  new ReactLoadablePlugin({
    filename: path.resolve(projectDir, 'build/static/react-loadable.json'),
  }),
];


export default client(configuration, settings);
