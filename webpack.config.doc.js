const path = require('path');
const config = require('./webpack.config.dev.js');

module.exports = {
  ...config,
  mode: 'production',
  output: { path: path.resolve(__dirname, 'docs'), filename: '[name].js' },
};
