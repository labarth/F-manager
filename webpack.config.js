const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: './src/index.js',
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
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  plugins: [],
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
  },
};