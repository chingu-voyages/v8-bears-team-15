// import jwt from 'jsonwebtoken';

// import { config } from '../src/config/config';

// const generateToken = (user) => {
//   return jwt.sign(user, config.jwtPrivateKey, {
//     expiresIn: '7d',
//   });
// };

// eslint-disable-next-line import/prefer-default-export
// export const signIn = (req, res) => {
// // eslint-disable-next-line no-console
//   console.log('user at signin', res.req.useruser);
//   res.json({
//     user: res.req.user,
//     token: generateToken(res.req.user.toJSON())
//   });
// };


// module.exports = {
//   signIn(req, res) {
//     console.log('user at signin', res.req.useruser);
//     res.json({
//       user: res.req.user,
//       token: generateToken(res.req.user.toJSON())
//     });
//   },
// };
