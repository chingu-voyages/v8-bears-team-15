
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

//console.log("allRequest", jwtOptions.secretOrKey,jwtOptions.jwtFromRequest)

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  User.findOne({ _id: payload.sub }, { password: 0 }, (err, user) => {
    if (err) { console.log('jwt error', err); return done(err, false); }
    // eslint-disable-next-line no-console
    if (user) { console.log("jwt user found"); return done(null, user); }
    return done(null, null);
  });
}));


module.exports = passport;
