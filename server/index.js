import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import store from 'connect-mongo';



import { config } from './config/config';
import { logger } from './helper/logger';

// const config = require('./config/config');

const MongoStore = store(session);
const app = express();

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


app.use(session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection  
    }),
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
  }));


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
// require('./routes')(app)


app.listen(config.port, () => {
  logger.info(`CORS-enabled web server listening on port ${config.port}`);
});
