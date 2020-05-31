const path = require('path');
const webpack = require('webpack');

let baseConfig = {
  entry: './src/plugin.js',
  mode: 'production',
  devtool: 'source-map',
  node: {
    __dirname: false,
    fs: 'empty',
  },
  resolve: {
    modules: ['node_modules', __dirname],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      'dgram': 'dgram-browserify',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};

module.exports = baseConfig;
