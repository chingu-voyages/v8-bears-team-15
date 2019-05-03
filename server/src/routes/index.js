import express from 'express';
// import multer from 'multer';

// import User from '../models/User';

import auth from '../auth/passport';

import { signIn, signup } from '../../controllers/AuthenticationController';
import { userDashboard } from '../../controllers/User';


const router = express.Router();

// upload storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../uploaded');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}-${Date.now()}`);
//   }
// });


// eslint-disable-next-line import/prefer-default-export
// const upload = multer({ storage }).single('file');

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


// GOOGLE AUTH

router.get('/login/google', auth.googleAuthenticate);
router.get('/login/google/callback', auth.googleRedirectAuthenticate, auth.signToken);

// FACEBOOK AUTH
router.get('/login/facebook', auth.facebookAuthenticate);
router.get('/login/facebook/callback', auth.facebookRedirectAuthenticate, auth.signToken);

// LINKEDIN AUTH

router.get('/login/linkedin', auth.linkedinAuthenticate);
router.get('/login/linkedin/callback', auth.linkedinRedirectAuthenticate, auth.signToken);

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

// LOCAL AUTH
router.post('/register', signup);
router.post('/login', auth.authenticate, signIn);

router.get('/jobs', auth.restricted, userDashboard);

router.get('/success', signIn);

// router.post('/uploads', (req, res) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       console.log("mutler error", err);
//       return res.status(500).json(err);
//     } else if (err) {
//       console.log("other mutler error", err);
//       return res.status(500).json(err);
//     }
//     return res.status(200).send(req.file);
//   });
// });

module.exports = router;
