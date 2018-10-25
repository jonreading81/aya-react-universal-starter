const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const projectDir = path.resolve(__dirname, '..');

const plugins = [];

if (process.env.NODE_ENV  ===  'analyse') {
  plugins.push(new BundleAnalyzerPlugin());
}


const config = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'redux'],
  },
  output: {
    path: path.resolve(projectDir, 'build/static'),
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
    }
 }
  },
  plugins: plugins,
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: ['babel-loader', 'eslint-loader']
       },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
       test: /\.ico$/,
       use: [
         {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
           }
         }
       ]
     }
    ]
  }
};

module.exports = config;
