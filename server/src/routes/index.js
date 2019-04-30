import express from 'express';
import passportGoogle from '../auth/google';
import passportFacebook from '../auth/facebook';
import passportLinkedin from '../auth/linkedin';
import passportLocal from '../auth/local';
import passportJwt from '../auth/jwt';
import { signIn } from '../../controllers/AuthenticationController';
import { userDashboard } from '../../controllers/User';

const router = express.Router();


// Messages
router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Jobbatical clone application API'
  });
});

// Default
// router.get('/*', (req, res) => {
//   res.status(200).send({
//     message: 'The endpoint you have hit does not exist'
//   });
// });


// GOOGLE - may require scope definition

router.get('/login/google', passportGoogle.authenticate('google',
  {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email']
  }));

router.get('/login/google/callback',
  passportGoogle.authenticate('google',

    // (err, user, info) => {
    //   if (err) {
    //     // eslint-disable-next-line no-console
    //     console.log('error', err);
    //   }
    //   if (!user && info) {
    //     // eslint-disable-next-line no-console
    //     console.log('info error', info);
    //   }
    // },
    { session: false }), signIn);


// FACEBOOK - may require scope definition

router.get('/login/facebook', passportFacebook.authenticate('facebook'));

router.get('/login/facebook/callback',
  passportFacebook.authenticate('facebook', {
    failureRedirect: '/',
    successRedirect: '/home'
  }));

// LINKEDIN - may require scope definition

router.get('/login/linkedin', passportLinkedin.authenticate('linkedin'));

router.get('/login/linkedin/callback',
  passportLinkedin.authenticate('linkedin', {
    failureRedirect: '/',
    successRedirect: '/home'
  }));

/**
 * I ran into lots of issues working with the APIs
 * causing delays,
 * I was able to get few users created from the login
 * So I basically resorted to using the email text area
 * to return to the app;
 *
 *  The email text area will go straight to this route,
 * authentication is only done with email since it's assumed that
 */
router.post('/login',
  passportLocal.authenticate('local', { session: false }),
  signIn);

router.get('/jobs',
  passportJwt.authenticate('jwt', { session: false }),
  userDashboard);

module.exports = router;
