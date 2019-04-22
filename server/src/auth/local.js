import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';


import User from '../models/User';
import initializer from './sessions';

const options = {
  usernameField: 'email',
  passwordField: 'email',
};


passport.use(new LocalStrategy(options,
  (email, password, done) => {
    User.findOne(
      {
        email
      }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }

        return done(null, user);
      }
    );
  }));

initializer(passport);

module.exports = passport;
