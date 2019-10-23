const config = require('./webpack.config.dev.js');
const path = require('path');

module.exports = {
  ...config,
  mode: 'production',
  output: { path: path.resolve(__dirname, 'doc'), filename: '[name].js' },
};
