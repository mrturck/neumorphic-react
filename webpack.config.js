const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1
  entry: './dist/main.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // 2
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    // filename: 'bundle.js',
  },
  plugins: [],
  // 3
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    port: 8082,

  },
};
