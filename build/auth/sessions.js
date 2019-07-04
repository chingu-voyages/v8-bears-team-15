"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose from 'mongoose';
module.exports = function () {
  _passport["default"].serializeUser(function (user, done) {
    done(null, user.profileId);
  });

  _passport["default"].deserializeUser(function (profileId, done) {
    _User["default"].findById(profileId).then(function (user) {
      done(null, user);
    })["catch"](function (err) {
      return done(err, null);
    });
  });
};