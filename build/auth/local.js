"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _User = _interopRequireDefault(require("../models/User"));

var _sessions = _interopRequireDefault(require("./sessions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  usernameField: 'email',
  passwordField: 'email'
};

_passport["default"].use(new _passportLocal.Strategy(options, function (email, password, done) {
  _User["default"].findOne({
    email: email
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
}));

(0, _sessions["default"])(_passport["default"]);
module.exports = _passport["default"];