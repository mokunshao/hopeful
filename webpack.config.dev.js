const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    hopeful: path.resolve(__dirname, 'src/index.js'),
    example: path.resolve(__dirname, 'docs-src/example.js'),
  },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'docs-src/index.html'),
      title: 'hopeful',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        loader: [
          'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    host: 'localhost',
    port: 8888,
  },
};
