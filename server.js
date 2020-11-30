require('dotenv').config({path : '.env'});

const log = require('./logger');

log.info('I am info log');

log.debug('I am debug log');

log.error('I am error log');

log.warn('I am warning log');