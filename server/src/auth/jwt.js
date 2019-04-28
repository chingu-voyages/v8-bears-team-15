import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt as ExtractToken
} from 'passport-jwt';

import User from '../models/User';
import { envConfig } from '../config/config';

const config = envConfig();

const jwtOptions = {
  jwtFromRequest: ExtractToken.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtPrivateKey,
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
