import passport from 'passport';
// import mongoose from 'mongoose';

import User from '../models/User';


module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.profileId);
  });

  passport.deserializeUser((profileId, done) => {
    User.findById(profileId).then((user) => {
      done(null, user);
    }).catch(err => done(err, null));
  });
};
