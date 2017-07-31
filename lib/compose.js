module.exports = (...middlewares) => (event, context, callback) => {
  let done = false

  const cb = (err, data) => {
    done = true
    callback(err, data)
  }

  for (let middleware of middlewares) {
    const newEvent = middleware(event, context, cb)

    // If the callback was called, stop now
    if (done) break
    // Otherwise, maybe update the event?
    else if (newEvent) event = newEvent
  }
}
