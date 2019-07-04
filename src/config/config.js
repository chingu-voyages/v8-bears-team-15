import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';


export const allConfig = {
  test: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://localhost/bears15Test',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET,
  },
  development: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://localhost/bears15',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET,
  },
  production: {
    port: process.env.PORT || 8081,
    database: process.env.MONGODB_URI || 'mongodb://admin:bears15admin@ds151066.mlab.com:51066/jobbatical-clone',
    jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key',
    jwtSecret: process.env.JWT_SECRET,
  }
};

export const envConfig = () => {
  if (env === 'test') {
    return allConfig.test;
  }
  if (env === 'development') {
    return allConfig.development;
  }
  if (env === 'production') {
    return allConfig.production;
  }
};

const config = envConfig();


export const facebook = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `https://127.0.0.1:${config.port}/login/facebook/callback`
};


export const google = {
  clientID: process.env.GOOGLE_APP_ID,
  clientSecret: process.env.GOOGLE_APP_SECRET,
  callbackURL: `http://127.0.0.1:${config.port}/login/google/callback`
};


export const linkedIn = {
  clientID: process.env.LINKEDIN_APP_ID,
  clientSecret: process.env.LINKEDIN_APP_SECRET,
  callbackURL: `http://127.0.0.1:${config.port}/login/linkedin/callback`
};
