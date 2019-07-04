"use strict";

var _express = _interopRequireDefault(require("express"));

var _google = _interopRequireDefault(require("../auth/google"));

var _facebook = _interopRequireDefault(require("../auth/facebook"));

var _linkedin = _interopRequireDefault(require("../auth/linkedin"));

var _local = _interopRequireDefault(require("../auth/local"));

var _jwt = _interopRequireDefault(require("../auth/jwt"));

var _AuthenticationController = require("../../controllers/AuthenticationController");

var _User = require("../../controllers/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import multer from 'multer';
// import User from '../models/User';
var router = _express["default"].Router(); // upload storage
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


router.get('/', function (req, res) {
  res.status(200).send({
    message: 'Welcome to Jobbatical clone application API'
  });
}); // Default
// router.get('/*', (req, res) => {
//   res.status(200).send({
//     message: 'The endpoint you have hit does not exist'
//   });
// });
// GOOGLE - may require scope definition

router.get('/login/google', _google["default"].authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email']
}));
router.get('/login/google/callback', _google["default"].authenticate('google', {
  session: false
}), _AuthenticationController.signIn); // FACEBOOK - may require scope definition

router.get('/login/facebook', _facebook["default"].authenticate('facebook'));
router.get('/login/facebook/callback', _facebook["default"].authenticate('facebook', {
  failureRedirect: '/',
  successRedirect: '/home'
})); // LINKEDIN - may require scope definition

router.get('/login/linkedin', _linkedin["default"].authenticate('linkedin'));
router.get('/login/linkedin/callback', _linkedin["default"].authenticate('linkedin', {
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

router.post('/login', _local["default"].authenticate('local', {
  session: false
}), _AuthenticationController.signIn);
router.get('/jobs', _jwt["default"].authenticate('jwt', {
  session: false
}), _User.userDashboard);
router.get('/success', _AuthenticationController.signIn); // router.post('/uploads', (req, res) => {
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