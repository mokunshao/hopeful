const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: { hopeful: path.resolve(__dirname, 'src/index.js') },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].min.js' },
  plugins: [
    new UglifyJs(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
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
    ],
  },
};
