"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _config = require("../config/config");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = (0, _config.envConfig)();
var jwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
};

_passport["default"].use(new _passportJwt.Strategy(jwtOptions, function (payload, done) {
  _User["default"].findOne({
    _id: payload.sub
  }, {
    password: 0
  }, function (err, user) {
    if (err) {
      console.log('jwt error', err);
      return done(err, false);
    } // eslint-disable-next-line no-console


    if (user) {
      return done(null, user);
    }

    return done(null, null);
  });
}));

module.exports = _passport["default"];