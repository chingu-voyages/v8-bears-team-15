import jwt from 'jwt-simple';

import { envConfig } from '../src/config/config';
import User from '../src/models/User';
import Listing from '../src/models/Listing';

const config = envConfig();


const generateToken = (user) => {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timeStamp }, config.jwtSecret);
};

// eslint-disable-next-line import/prefer-default-export
export const signIn = (req, res) => {
  // eslint-disable-next-line no-console
 // console.log('user at signin', res.req.user);
//  console.log("initial res", req);
//  console.log("all user req", res);
  res.json({
    success: true,
    user: res.req.user,
    token: generateToken(req.user)
  });
};


export const userDashboard = (req, res) => {
  // eslint-disable-next-line no-console
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
      Listing.find({}, (err, lists) => {
        if (err) {
          res.json({
            success: false,
            error: err
          });
        } else {
          res.json({
            success: true,
            user,
            listings: lists
          });
        }
      });
    }
  });
};
