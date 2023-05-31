const express = require('express')
const logger = require('./logger')
const app = express()

app.get('/', (req, res) => {
  logger.info('Server Listening On Port 5001')
  res.sendStatus(200)
})

app.listen(5001)
