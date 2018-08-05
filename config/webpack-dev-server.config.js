'use strict';

const path = require('path');
const paths = require('./paths');
const config = require('./webpack.config.dev');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = {
  https: protocol === 'https',
  host: host,
  disableHostCheck: process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
  compress: true,
  hot: true,
  clientLogLevel: 'none',
  publicPath: config.output.publicPath,
  contentBase: paths.appPublic,
  watchContentBase: true,
  watchOptions: {
    ignored: new RegExp(
      `^(?!${path
        .normalize(paths.appSrc + '/')
        .replace(/[\\]+/g, '\\\\')}).+[\\\\/]node_modules[\\\\/]`,
      'g'
    ),
  },
  overlay: false,
  quiet: true,
};
