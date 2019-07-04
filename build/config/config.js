"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkedIn = exports.google = exports.facebook = exports.envConfig = exports.allConfig = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var env = process.env.NODE_ENV || 'development';
var allConfig = {
  test: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://localhost/bears15Test',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET
  },
  development: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://localhost/bears15',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET
  },
  production: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://admin:bears15admin@ds151066.mlab.com:51066/jobbatical-clone',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET
  }
};
exports.allConfig = allConfig;

var envConfig = function envConfig() {
  if (env === 'test') {
    return allConfig.test;
  }

  if (env === 'development') {
    return allConfig.development;
  }
};

exports.envConfig = envConfig;
var config = envConfig();
var facebook = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://127.0.0.1:".concat(config.port, "/login/facebook/callback")
};
exports.facebook = facebook;
var google = {
  clientID: process.env.GOOGLE_APP_ID,
  clientSecret: process.env.GOOGLE_APP_SECRET,
  callbackURL: "http://127.0.0.1:".concat(config.port, "/login/google/callback")
};
exports.google = google;
var linkedIn = {
  clientID: process.env.LINKEDIN_APP_ID,
  clientSecret: process.env.LINKEDIN_APP_SECRET,
  callbackURL: "http://127.0.0.1:".concat(config.port, "/login/linkedin/callback")
};
exports.linkedIn = linkedIn;