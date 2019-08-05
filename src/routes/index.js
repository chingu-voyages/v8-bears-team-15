import express from 'express';
// import multer from 'multer';

// import User from '../models/User';

import passportGoogle from '../auth/google';
import passportFacebook from '../auth/facebook';
import passportLinkedin from '../auth/linkedIn';
import passportLocal from '../auth/local';
import passportJwt from '../auth/jwt';
import { signIn, generateToken } from '../controllers/AuthenticationController';
import { userDashboard } from '../controllers/User';

let sess;

// import { sess } from '../index';


const router = express.Router();

// Messages
router.get('/welcome', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Jobbatical clone application API'
  });
});


// GOOGLE - may require scope definition

router.get('/login/google', passportGoogle.authenticate('google',
  {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email']
  }));

router.get('/login/google/callback',
  passportGoogle.authenticate('google'), (req, res) => {
     req.session.user = res.req.user;
     console.log({
      type: typeof req.session.user,
      user: req.session.user
     })
     if(req.session.user){
      sess = req.session.user
      res.redirect('/success')
     }
     
  });


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


router.post('/login',
  passportLocal.authenticate('local', { session: false }),
  signIn);

router.get('/jobs',
  passportJwt.authenticate('jwt', { session: false }),
  userDashboard);

router.get('/success', (req, res) => {
  if(sess !== undefined){
    res.json({
      success: true,
      user: sess,
      token: generateToken(sess)
    })
  }  
});


module.exports = router;
