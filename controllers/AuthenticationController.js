import User from '../src/models/User';
import auth from '../src/auth/passport';

import Listing from '../src/models/Listing';

// Register a new user
export const signup = (req, res) => {
  const {
    username, password, email, firstName, lastName
  } = req.body;
  const newUserInfo = {
    username, password, email, firstName, lastName
  };

  User.findOne({ 'local.email': email }).then((existingUser) => {
    // If user with that email exists
    if (existingUser) {
      // if user already signed up locally
      if (existingUser.local.password) {
        return res.status(409).json({ message: 'problem signing up' });
      } else {
        try {
          /**
           * if user had previously signed up with an OAuth strategy this
           * condition will now link the two in the database
           */
          const updatedUser = existingUser.linkAccounts(User, newUserInfo);
          const token = makeToken(updatedUser);
          res.status(201).json({ token });
        } catch (err) {
          // pass 'err' to 'next()' if anything goes wrong updating the user
          next(err);
        }
      }
    } else {
      const user = new User({
        method: 'local',
        local: {
          username,
          password,
          email
        },
      });
      user
        .save()
        .then((newUser) => {
          const token = makeToken(newUser);
          res.status(201).json({ token });
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  });
};


// Login a user locally
export const signIn = (req, res) => {
  if (!req.user) {
    return res.status(422);
  }
  res.status(200).json({ token: auth.makeToken(req.user), user: req.user });
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
