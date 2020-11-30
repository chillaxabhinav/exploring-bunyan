const bunyan = require('bunyan');
const path = require('path');

const level = process.env.NODE_LOGGING_LEVEL || 'info';

// console.log('logging level ', level);

// ======== Different levels of logs ========== //
/*
    1. Fatal (60)
    2. error (50) 
    3. warn (40)
    4. info (30)
    5. debug (20)
    6. trace (10)

    So if we are at a level then we will log everything above that level including that level. We will not log anything below that level.

    eg. if we are at 'error' level then we will log error and fatal only and not log anything else below error level.
*/
// ========================================= //

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