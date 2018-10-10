const path = require('path');

module.exports = {
  entry: {
    client: ['./src/index.js'],
    vendor: ['react', 'react-dom', 'redux']
  },
  output: {
    path: path.resolve(__dirname, '../build/static'),
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
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: ['babel-loader', 'eslint-loader']
       },
      {
        test: /\.css$/,
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
          }
        ]
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
      }
    ]
  }
};
