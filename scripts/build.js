'use strict';

// Configure right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Crash on unhandled rejections
process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');

fs.emptyDirSync(paths.appBuild);

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    return reject(err);
  }

  console.log(stats);
});
