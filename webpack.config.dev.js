const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const uglifyJs = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    hopeful: path.resolve(__dirname, 'src/index.js'),
    example: path.resolve(__dirname, 'docs-src/example.js'),
  },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  plugins: [
    new uglifyJs(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === 'development' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env'],
        },
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
