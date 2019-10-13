const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 2019,
    compress: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});