import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';

import { google } from '../config/config';
import initializer from './sessions';


passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: google.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne(
        {
          username: profile.displayName
        },
        (err, user) => {
          if (err) return done(err);

          if (user) {
            return done(null, user);
          } else {
            const newUser = new User({
              // please inspect returned profile details
              id: profile.id,
              username: profile.displayName,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              verified: profile._json.email_verified,
              imageUrl: profile.photos[0].value
            });
            newUser.save(err => {
              if (err) {
                throw err;
              }
              return done(err, user);
            });
          }
        }
      );
    }
  )
);

initializer();

module.exports = passport;
