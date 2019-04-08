import passport from 'passport';
import { Strategy as GoogleStrategy} from 'passport-google-oauth20';
import User from '../models/User';

import {google} from '../config/config';
import initializer from './sessions';



passport.use(new GoogleStrategy({
  clientID: google.clientID,
  clientSecret: google.clientSecret,
  callbackURL: google.callbackURL,
}, (accessToken, refreshToken, profile, done) => {
  User.findOne ({ 
    id: profile.id 
  },  (err, user) => {
      if(err) return done(err);

      if(user) {
        return done(null, user)
      } else {
        // inspect returned profile details
        const newUser = new User({
          id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
        })

        newUser.save((err) => {
          if (err) {
            throw err;
          }
          return done(err, user)
        })
      }
  });
}
));


initializer();

module.exports = passport;