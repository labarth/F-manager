const path = require('path');
const srcDir = path.resolve(__dirname, 'src');

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
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 2019,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [],
};