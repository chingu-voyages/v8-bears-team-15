import passport from 'passport';
import { Strategy as LinkedInStrategy} from 'passport-linkedin-oauth2';
import User from '../models/User';

import { linkedIn } from '../config/config';
import initializer from './sessions';



passport.use(new LinkedInStrategy({
  clientID: linkedIn.clientID,
  clientSecret: linkedIn.clientSecret,
  callbackURL: linkedIn.callbackURL,
  scope: ['r_emailaddress', 'r_basicprofile'],
}, (accessToken, refreshToken, profile, done) => {
  User.findOne ({ 
    id: profile.id 
  },  (err, user) => {
      if(err) return done(err);

      if(user) {
        return done(null, user)
      } else {
        // inspect returned profile details
        const newUser = new User({
          id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
        })

        newUser.save((err) => {
          if (err) {
            throw err;
          }
          return done(err, user)
        })
      }
  });
}
));


initializer();

module.exports = passport;