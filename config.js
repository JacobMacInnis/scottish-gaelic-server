'use strict';
require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://tishScotlicGae:6MUdOWmmoO4ODMxJaE1NnSqRx@ds155263.mlab.com:55263/gaelic',
  TEST_MONGODB_URI: process.env.TEST_MONGODB_URI || 'mongodb://tishScotlicGae:6MUdOWmmoO4ODMxJaE1NnSqRx@ds155263.mlab.com:55263/gaelic',
  CLIENT_ORIGIN: process.env.NODE_ENV || 'http://localhost:3000',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
};