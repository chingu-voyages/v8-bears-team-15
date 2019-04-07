import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import User from '../models/User';

import {facebook} from '../config/config';
import initializer from './sessions';



passport.use(new FacebookStrategy({
  clientID: facebook.clientID,
  clientSecret: facebook.clientSecret,
  callbackURL: facebook.callbackURL,
}, (accessToken, refreshToken, profile, done) => {
  User.findOne ({ 
    facebookId: profile.id 
  },  (err, user) => {
      if(err) return done(err);

      if(user) {
        return done(null, user)
      } else {
        const newUser = new User({
          name: profile.displayName,
          firstName: profile.givenName,
          lastName: profile.familyName,
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