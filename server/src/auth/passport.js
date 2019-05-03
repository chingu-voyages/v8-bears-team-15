import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {
  Strategy as JwtStrategy,
  ExtractJwt as ExtractToken
} from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

import {
  envConfig, facebook, google, linkedIn
} from '../config/config';

import User from '../models/User';

const config = envConfig();

/* Local Strategy */
const options = {
  usernameField: 'email',
};


const localStrategy = new LocalStrategy(options,
  (email, password, done) => {
    User.findOne({ 'local.email': email }, async (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!await user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  });

const jwtOptions = {
  jwtFromRequest: ExtractToken.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

/* Passport strategy for securing RESTful endpoints using JWT */
const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .select('-password')
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      done(err, false);
    });
});

/* Google OAuth Strategy */
const googleStrategy = new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne(
      {
        $or: [{ 'google.id': profile.id }, { 'local.email': profile.emails[0].value }]
      }
    )
      .then((existingUser) => {
        if (existingUser) {
          if (existingUser.google.id === undefined) {
            existingUser.google.id = profile.id;
            existingUser.google.username = profile.displayName;
            existingUser.google.email = profile.emails[0].value;
            existingUser.save();
          }
          done(null, existingUser);
        } else {
          const newUser = new User({
            method: 'google',
            google: {
              id: profile.id,
              email: profile.emails[0].value,
              username: profile.displayName,
            }
          });
          newUser.local.email = profile.emails[0].value;
          newUser.local.username = profile.displayName;
          newUser.imageUrl = profile.photos[0].value;
          newUser.save().then((user) => {
            done(null, user);
          });
        }
      })
      .catch((err) => {
        done(err, false, err.message);
      });
  }
);

/* Facebook OAuth Strategy */
const facebookStrategy = new FacebookStrategy(
  {
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    callbackURL: facebook.callbackURL,
    profileFields: ['id', 'displayName', 'name', 'gender', 'photos', 'email']
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne(
      {
        $or: [{ 'facebook.id': profile.id }, { 'local.email': profile.emails[0].value }]
      }
    )
      .then((existingUser) => {
        if (existingUser) {
          if (existingUser.facebook.id === undefined) {
            existingUser.facebook.id = profile.id;
            existingUser.facebook.username = profile.displayName;
            existingUser.facebook.email = profile.emails[0].value;
            existingUser.facebook.picture = profile._json.picture.data.url;
            existingUser.facebook.token = accessToken;
            existingUser.save();
          }
          done(null, existingUser);
        } else {
          const newUser = new User({
            method: 'facebook',
            facebook: {
              id: profile.id,
              username: profile.displayName,
              email: profile.emails[0].value,
              picture: profile._json.picture.data.url,
              token: accessToken,
              verified: profile._json.email_verified,
              imageUrl: profile.photos[0].value
            }
          });
          newUser.local.email = profile.emails[0].value;
          newUser.local.username = profile.displayName;
          newUser.local.firstName = profile.givenName;
          newUser.local.lastName = profile.familyName;
          newUser.save().then((user) => {
            done(null, user);
          });
        }
      })
      .catch((err) => {
        done(err, false, err.message);
      });
  }
);

/* LinkedIn OAuth Strategy */
const linkedinStrategy = new LinkedInStrategy(
  {
    clientID: linkedIn.clientID,
    clientSecret: linkedIn.clientSecret,
    callbackURL: linkedIn.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne(
      {
        $or: [{ 'linkedin.id': profile.id }, { 'local.email': profile.emails[0].value }]
      }
    )
      .then((existingUser) => {
        if (existingUser) {
          if (existingUser.linkedin.id === undefined) {
            existingUser.linkedin.id = profile.id;
            existingUser.linkedin.username = profile.displayName;
            existingUser.linkedin.firstName = profile.name.givenName;
            existingUser.linkedin.lastName = profile.name.familyName;
            existingUser.linkedin.email = profile.emails[0].value;
            existingUser.linkedin.token = accessToken;
            existingUser.save();
          }
          done(null, existingUser);
        } else {
          const newUser = new User({
            method: 'linkedin',
            facebook: {
              id: profile.id,
              username: profile.displayName,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              token: accessToken,
              imageUrl: profile.photos[0].value
            }
          });
          newUser.local.email = profile.emails[0].value;
          newUser.local.username = profile.displayName;
          newUser.save().then((user) => {
            done(null, user);
          });
        }
      })
      .catch((err) => {
        done(err, false, err.message);
      });
  }
);

// passport global middleware
passport.use(localStrategy);
passport.use(jwtStrategy);
passport.use(googleStrategy);
passport.use(facebookStrategy);
passport.use(linkedinStrategy);

// passport local middleware
const passportOptions = { session: false };
const googleOptions = { session: false, scope: ['profile', 'email'] };
const facebookOptions = { session: false, scope: ['email'] };
const linkedinOptions = { session: false, scope: ['r_emailaddress', 'r_liteprofile'], };

const authenticate = passport.authenticate('local', passportOptions);
const restricted = passport.authenticate('jwt', passportOptions);
const googleAuthenticate = passport.authenticate('google', googleOptions);
const facebookAuthenticate = passport.authenticate('facebook', facebookOptions);
const linkedinAuthenticate = passport.authenticate('github', linkedinOptions);
const googleRedirectAuthenticate = passport.authenticate('google', passportOptions);
const facebookRedirectAuthenticate = passport.authenticate('facebook', passportOptions);
const linkedinRedirectAuthenticate = passport.authenticate('linkedin', passportOptions);

// eslint-disable-next-line require-jsdoc
function makeToken(user) {
  const timestamp = new Date().getTime();
  const payload = {
    iss: 'Closet Roulette',
    sub: user._id,
    iat: timestamp
  };
  // eslint-disable-next-line no-shadow
  const options = {
    expiresIn: '7d'
  };
  return jwt.sign(payload, config.jwtSecret, options);
}

// Issue Token
const signToken = (req, res) => {
  const timestamp = new Date().getTime();
  const payload = {
    sub: req.user._id,
    iat: timestamp,
    username: req.user.username
  };
  // eslint-disable-next-line no-shadow
  const options = {
    expiresIn: '7d'
  };
  jwt.sign(payload, config.jwtSecret, options, (err, token) => {
    if (err) {
      res.redirect(`${config.WEB_URL}/login#err=${err}`);
    } else {
      res.redirect(`${config.WEB_URL}/jobs#token=${token}`);
    }
  });
};

export default {
  authenticate,
  restricted,
  googleAuthenticate,
  googleRedirectAuthenticate,
  facebookAuthenticate,
  facebookRedirectAuthenticate,
  linkedinAuthenticate,
  linkedinRedirectAuthenticate,
  makeToken,
  signToken
};
