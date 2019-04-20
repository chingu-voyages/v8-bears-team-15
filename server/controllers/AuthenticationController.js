import jwt from 'jsonwebtoken';

import { config } from '../src/config/config';
import User from '../src/models/User';

const generateToken = (user) => {
  return jwt.sign(user, config.jwtPrivateKey, {
    expiresIn: '7d',
  });
};

// eslint-disable-next-line import/prefer-default-export
export const signIn = (req, res) => {
  // eslint-disable-next-line no-console
 // console.log('user at signin', res.req.user);
  res.json({
    user: res.req.user,
    token: generateToken(res.req.user.toJSON())
  });
};

export const userDashboard = (req, res) => {
  // eslint-disable-next-line no-console
  console.log('REQ', req.headers);
  // all user details with applications
  // and application updates should be returned at dashboard
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      res.json({
        success: false,
        err
      });
    } else {
      // fetch application data from mongo and add
      // to payload
      res.json({
        success: true,
        user,
        // otherdata: data
      });
    }
  });
};
