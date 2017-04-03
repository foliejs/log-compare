const bunyan = require('bunyan')
function reqSerializer(req) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}
var log = bunyan.createLogger({
    name: 'myapp',
    serializers: {
        req: reqSerializer
    }
})

let bob,anotherVar = 'hello'
let err = 'error'
let more = 'more thing'
log.info();     // Returns a boolean: is the "info" level enabled?
                // This is equivalent to `log.isInfoEnabled()` or
                // `log.isEnabledFor(INFO)` in log4j.

log.info('hi');                     // Log a simple string message (or number).
log.info('hi %s', bob, anotherVar); // Uses `util.format` for msg formatting.

log.info({foo: 'bar'}, 'hi');
                // The first field can optionally be a "fields" object, which
                // is merged into the log record.

log.info(err);  // Special case to log an `Error` instance to the record.
                // This adds an "err" field with exception details
                // (including the stack) and sets "msg" to the exception
                // message.
log.info(err, 'more on this: %s', more);
                // ... or you can specify the "msg".

log.info({foo: 'bar', err: err}, 'some msg about this error');
                // To pass in an Error *and* other fields, use the `err`
                // field name for the Error instance.
