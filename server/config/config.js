import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 8081,
  database: process.env.MONGODB_URI || 'mongodb://localhost/bears15',
  jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key'
}

export const facebook = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `https://127.0.0.1:${config.port}/login/facebook/callback`
}


export const google = {
  clientID: process.env.GOOGLE_APP_ID,
  clientSecret: process.env.GOOGLE_APP_SECRET,
  callbackURL: `http://127.0.0.1:${config.port}/login/google/callback`
}


export const linkedIn = {
  clientID: process.env.LINKEDIN_APP_ID,
  clientSecret: process.env.LINKEDIN_APP_SECRET,
  callbackURL: `http://127.0.0.1:${config.port}/login/linkedin/callback`
}

