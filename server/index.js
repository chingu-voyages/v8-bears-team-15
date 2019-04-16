import http from 'http';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose, { Mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import store from 'connect-mongo';
import routes from './routes/index';

import { config } from './config/config';
import { logger } from './helper/logger';

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
app.use(express.json())


app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'))

app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

/**
 * I noticed I couldn't run the app
 * until I commented this "if (!module.parent) {"
 * what should be done to get it to run
 */

if (!module.parent) {
  app.listen(config.port, () => {
    logger.info(`CORS-enabled web server listening on port ${config.port}`)
  })
}

module.exports = app;
