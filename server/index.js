import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import routes from './routes';
import { config } from './config/config';

const logger = require('tracer').colorConsole({
  filters: [
    colors.underline, colors.green,
    {
      warn: colors.yellow,
      error: [colors.red, colors.bold],
    },
  ],
});

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
app.server = http.createServer(app);

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(morgan('dev'))

app.use(cors())

app.use('/', routes);

if (!module.parent) {
  app.listen(config.port, () => {
    logger.info(`CORS-enabled web server listening on port ${config.port}`)
  })
}

module.exports = app;
