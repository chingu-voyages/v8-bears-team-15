import http from 'http';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import multer from 'multer';
import cors from 'cors';
import morgan from 'morgan';
import store from 'connect-mongo';
import routes from './routes/index';

import { envConfig } from './config/config';
import { logger } from './helper/logger';

// // upload storage


const config = envConfig();
// Connect database
mongoose.connect(config.database, { useNewUrlParser: true })
  .then(() => {
    logger.info(`Connected to DB: ${config.database}`);
  })
  .catch((error) => {
    logger.error({
      message: 'Failed to connect to DB',
      error: error.message,
    });
  });

// Instantiate server
const app = express();
const MongoStore = store(session);
app.server = http.createServer(app);

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
}));

app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

if (!module.parent) {
  app.listen(config.port, () => {
    logger.info(`CORS-enabled web server listening on port ${config.port}`);
  });
}

module.exports = app;
