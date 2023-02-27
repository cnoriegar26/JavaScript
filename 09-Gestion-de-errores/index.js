const winston = require('winston');

const logger = winston.createLogger({
  level: 'debugn',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

///console.log("Hola estoy saliendo por pantalla")
console.info("Este es un mensaje informativo")
console.warn("Esto es un mensaje de advertencia")
console.error("Esto es un mensaje de error")
