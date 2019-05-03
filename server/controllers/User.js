import User from '../src/models/User';
import Listing from '../src/models/Listing';

// eslint-disable-next-line import/prefer-default-export
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
