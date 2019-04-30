
import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt as ExtractToken
} from 'passport-jwt';

import { envConfig } from '../config/config';


import User from '../models/User';


const config = envConfig();

const jwtOptions = {
  jwtFromRequest: ExtractToken.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};


passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) { return done(err, false); }
    // eslint-disable-next-line no-console
    console.log('jwt error', err);
    if (user) { return done(null, user); }
  });
}));


module.exports = passport;
