import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import mongoose from 'mongoose';
import { google } from '../config/config';


import User from '../models/User';
// import initializer from './sessions';


passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: google.callbackURL,
      passReqToCallBack: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      User.findOne(
        {
          profileId: profile.id
        },
        (err, user) => {
          if (err) return done(err);

          if (user) {
            return done(null, user);
          } else {
            const newUser = new User({
              // please inspect returned profile details
              profileId: profile.id,
              userName: profile.displayName,
              email: profile.emails[0].value,
              verified: profile.emails[0].verified,
              provider: 'google',
              imageUrl: profile.photos[0].value
            });
            newUser.save((err) => {
              if (err) {
                throw err;
              }
              return done(null, user);
            });
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((profileId, done) => {
  User.findById(profileId).then((user) => {
    done(null, user);
  }).catch(err => done(err, null));
});

module.exports = passport;
