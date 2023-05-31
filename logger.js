const { format, createLogger, transports } = require('winston')
const { combine, timestamp, label, printf } = format
const CATEGORY = 'winston custom format'

// const logger = winston.createLogger({
//   level: 'debug',
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// })
// using the printf format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'debug',
  format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
  transports: [
    new transports.File({
      filename: 'logs/example.log',
    }),
  ],
})

const DailyRotateFile = require('winston-daily-rotate-file')
logger.configure({
  level: 'verbose',
  transports: [
    new DailyRotateFile({
      filename: 'logs/logs-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: false,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

module.exports = logger
