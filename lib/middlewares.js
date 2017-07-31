const res = require('./res')

const parseBody = (event, context, callback) => {
  if (typeof event.body !== 'string') {
    return callback(null, res.fail('No body provided'))
  }

  event.body = JSON.parse(event.body)
  return event
}

module.exports = {
  parseBody
}
