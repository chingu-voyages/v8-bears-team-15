import passport from 'passport';
// import mongoose from 'mongoose';

import User from '../models/User';


// module.exports = () => {
//   passport.serializeUser((user, done) => {
//     done(null, user._id);
//   });

//   passport.deserializeUser((_id, done) => {
//     User.findById(_id).then((user) => {
//       done(null, user);
//     }).catch(err => done(err, null));
//   });
// };

// module.exports = () => {
//   passport.serializeUser((user, done) => {
//     done(null, user.profileId);
//   });

//   passport.deserializeUser((profileId, done) => {
//     User.findById(profileId).then((user) => {
//       done(null, user);
//     }).catch(err => done(err, null));
//   });
// };


module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    User.findOne({email: email }).then((user) => {
      done(null, user);
    }).catch(err => done(err, null));
  });
};
