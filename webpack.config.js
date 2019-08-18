const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const title = 'Master Tools';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const baseUrl = '/';

module.exports = function webpackConfig(server) {
  return {
    mode: 'development',
    resolve: {
      extensions: ['.js'],
      modules: [srcDir, 'node_modules']
    },
    entry: {
      app: ['aurelia-bootstrapper'],
      vendor: ['bluebird']
    },
    output: {
      path: outDir,
      publicPath: baseUrl,
      filename: '[name].[hash].bundle.js',
      sourceMapFilename: '[name].[hash].bundle.map',
      chunkFilename: '[name].[hash].chunk.js'
    },
    devServer: {
      contentBase: outDir,
      historyApiFallback: true
    },
    module: {
      rules: [
        { test: /\.html$/i, loader: 'html-loader' }
      ]
    },
    plugins: [
      new AureliaPlugin(),
      new ProvidePlugin({
        Promise: 'bluebird'
      }),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        metadata: {
          title, server, baseUrl
        }
      })
    ]
  };
};
