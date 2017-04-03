const ilog = require('ilog')

ilog('hello', {a: 1, b: 2}, [1, 2, 3])
ilog.error('test error 2')
ilog.error(new Error('this is error'))
ilog.warning(new Error('warn testing'))
ilog.info('good return')
ilog.debug('debug code')
