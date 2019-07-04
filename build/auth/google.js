"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = require("passport-google-oauth20");

var _config = require("../config/config");

var _User = _interopRequireDefault(require("../models/User"));

var _sessions = _interopRequireDefault(require("./sessions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose from 'mongoose';
_passport["default"].use(new _passportGoogleOauth.Strategy({
  clientID: _config.google.clientID,
  clientSecret: _config.google.clientSecret,
  callbackURL: _config.google.callbackURL,
  passReqToCallBack: true
}, function (req, accessToken, refreshToken, profile, done) {
  _User["default"].findOne({
    profileId: profile.id
  }, function (err, user) {
    // console.log(user);
    if (err) return done(err);

    if (user) {
      return done(null, user);
    } else {
      var newUser = new _User["default"]({
        // please inspect returned profile details
        profileId: profile.id,
        userName: profile.displayName,
        email: profile.emails[0].value,
        verified: profile.emails[0].verified,
        provider: 'google',
        imageUrl: profile.photos[0].value
      });
      newUser.save(function (err) {
        if (err) {
          throw err;
        }

        return done(null, user);
      });
    }
  });
})); // passport.serializeUser((user, done) => {
//   done(null, user._id);
// });
// passport.deserializeUser((profileId, done) => {
//   User.findById(profileId).then((user) => {
//     done(null, user);
//   }).catch(err => done(err, null));
// });


(0, _sessions["default"])();
module.exports = _passport["default"];