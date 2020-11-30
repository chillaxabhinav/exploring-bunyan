const bunyan = require('bunyan');
const path = require('path');

const level = process.env.NODE_LOGGING_LEVEL || 'info';

// console.log('logging level ', level);

const log = bunyan.createLogger({
    name : 'test',
    streams : [
        {
            level : level,
            stream : process.stdout
        },
        {
            level : level,
            path : path.resolve(__dirname, 'log.json')
        }
    ]
});

module.exports = log;