'use strict';

// Configure the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Crash on unhandled rejections
process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const devServerConfig = require('../config/webpack-dev-server.config');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, devServerConfig);

// Launch WebpackDevServer.
devServer.listen(DEFAULT_PORT, HOST, err => {
  if (err) {
    return console.log(err);
  }

  console.log('Starting the development server...\n');
});
