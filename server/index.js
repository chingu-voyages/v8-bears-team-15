import { config } from './config/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
const logger = require('tracer').colorConsole({
  filters: [
    colors.underline, colors.green,
    {
      warn: colors.yellow,
      error: [ colors.red, colors.bold ]
    }
  ]
})

const app = express()

mongoose.connect(config.database, { useNewUrlParser: true })
  .then(() => {
    logger.info(`Connected to DB: ${config.database}`)
  })
  .catch(e => {
    logger.error({
      message: 'Failed to connect to DB',
      error: e.message
    })
  })

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// require('./routes')(app)

app.listen(config.port, () => {
  logger.info(`CORS-enabled web server listening on port ${config.port}`)
})
