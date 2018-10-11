import { ReactLoadablePlugin } from 'react-loadable/webpack';
import path from 'path';
import configuration from './webpack.config';

configuration.plugins = [
  new ReactLoadablePlugin({
    filename: path.resolve(__dirname, '../build/static/react-loadable.json'),
  }),
];

export default configuration;
