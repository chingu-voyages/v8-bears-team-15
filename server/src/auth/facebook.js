import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import User from '../models/User';
import { facebook } from '../config/config';
import initializer from './sessions';

passport.use(
  new FacebookStrategy(
    {
      clientID: facebook.clientID,
      clientSecret: facebook.clientSecret,
      callbackURL: facebook.callbackURL
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
            // please inspect returned profile details
            const newUser = new User({
              id: profile.id,
              username: profile.displayName,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              verified: profile._json.email_verified,
              imageUrl: profile.photos[0].value
            });
            newUser.save((err) => {
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
