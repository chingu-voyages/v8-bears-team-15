import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { linkedIn } from '../config/config';
import initializer from './sessions';


import User from '../models/User';

passport.use(
  new LinkedInStrategy(
    {
      clientID: linkedIn.clientID,
      clientSecret: linkedIn.clientSecret,
      callbackURL: linkedIn.callbackURL,
      scope: ['r_emailaddress', 'r_liteprofile'],
      passReqToCallBack: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
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
              // verified: profile._json.email_verified,
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
