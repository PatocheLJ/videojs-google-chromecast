const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let baseConfig = {
  entry: {
      app: './src/plugin.js'
  },
  mode: 'production',
  devtool: 'source-map',

  resolve: {
    modules: ['node_modules', __dirname],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
        'dgram': 'dgram-browserify',
    },
  },

  node: {
    __dirname: false,
    fs: 'empty',
  },

  module: {
      rules: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                  plugins: ['@babel/plugin-syntax-dynamic-import'],
              },
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          },
          {
              test: /\.s?css$/,
              use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
      ]
  },

  plugins: [
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
      })
  ],

  optimization: {
      minimize: true,
      minimizer: [
          new TerserPlugin({
              parallel: true,
              sourceMap: true,
          }),
      ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  target: 'node',
};

module.exports = baseConfig;
