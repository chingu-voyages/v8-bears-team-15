import passport from 'passport';
// import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
import User from '../models/User';

import { linkedIn } from '../config/config';
import initializer from './sessions';



passport.use(
  new LinkedInStrategy(
    {
      clientID: linkedIn.clientID,
      clientSecret: linkedIn.clientSecret,
      callbackURL: linkedIn.callbackURL,
      scope: ['r_emailaddress', 'r_basicprofile'],
      profileFields: [
        "first-name",
        "last-name",
        "email-address",
        "headline",
        "summary",
        "industry",
        "picture-url",
        "positions",
        "public-profile-url",
        "location"
      ],
      passReqToCallback: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile)
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
