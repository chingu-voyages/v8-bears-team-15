import express from 'express';
import passportGoogle from '../auth/google';
import passportFacebook from '../auth/facebook';
import passportLinkedin from '../auth/linkedin';
// import { signIn } from '../../controllers/AuthenticationController';

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

router.get('/login/google',  passportGoogle.authenticate('google'));

router.get('/login/google/callback', 
passportGoogle.authenticate('google',{
    failureRedirect: '/login',
    successRedirect: '/home'
  })
  )

// FACEBOOK - may require scope definition

router.get('/login/facebook',  passportFacebook.authenticate('facebook'));

router.get('/login/facebook/callback', 
passportFacebook.authenticate('facebook',{
    failureRedirect: '/login',
    successRedirect: '/home'
  })
  )



 

// LINKEDIN - may require scope definition

router.get('/login/linkedin',  passportLinkedin.authenticate('linkedin'));

router.get('/login/linkedin/callback', 
passportLinkedin.authenticate('linkedin',{
    failureRedirect: '/login',
    successRedirect: '/home'
  })
  )


// router.get('/login', signIn)


module.exports = router;
