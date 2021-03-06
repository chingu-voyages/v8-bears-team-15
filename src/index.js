import http from 'http';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import multer from 'multer';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import connectStore from 'connect-mongo';
import routes from './routes/index';

import { envConfig } from './config/config';
import { logger } from './helper/logger';

// // upload storage


const config = envConfig();

// Connect database
mongoose.connect(config.database, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,  
  useFindAndModify: false,
  useCreateIndex: true
})
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
const MongoStore = connectStore(session);
app.server = http.createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use(session({
  store: new MongoStore({
    url: config.database
  }),
  name: 'jobbatical',
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
  }
}));


app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

if (!module.parent) {
  app.listen(config.port, () => {
    logger.info(`CORS-enabled web server listening on port ${config.port}`);
  });
}

module.exports = app;
