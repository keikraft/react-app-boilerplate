'use strict';

// Configures the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Crash on unhandled rejections
process.on('unhandledRejection', err => {
  throw err;
});

const jest = require('jest');
const argv = process.argv.slice(2);

jest.run(argv);
