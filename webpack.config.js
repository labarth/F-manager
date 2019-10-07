const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  output:  {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
      }
    ],
  },
  devServer: {
    port: 2019,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [],
};