"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLinkedinOauth = require("passport-linkedin-oauth2");

var _config = require("../config/config");

var _sessions = _interopRequireDefault(require("./sessions"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(new _passportLinkedinOauth.Strategy({
  clientID: _config.linkedIn.clientID,
  clientSecret: _config.linkedIn.clientSecret,
  callbackURL: _config.linkedIn.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
  passReqToCallBack: true
}, function (req, accessToken, refreshToken, profile, done) {
  _User["default"].findOne({
    username: profile.displayName
  }, function (err, user) {
    if (err) return done(err);

    if (user) {
      return done(null, user);
    } else {
      // please inspect returned profile details
      var newUser = new _User["default"]({
        id: profile.id,
        username: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        // verified: profile._json.email_verified,
        imageUrl: profile.photos[0].value
      });
      newUser.save(function (err) {
        if (err) {
          throw err;
        }

        return done(err, user);
      });
    }
  });
}));

(0, _sessions["default"])();
module.exports = _passport["default"];