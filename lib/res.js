module.exports = {
  defaultHeaders: {},
  setDefaultHeaders (headers) {
    this.defaultHeaders = headers
  },

  send (body, statusCode = 200, contentType = 'text/plain') {
    return {
      statusCode,
      headers: Object.assign(
        {},
        this.defaultHeaders,
        {
          'Content-type': contentType
        }
      ),
      body
    }
  },

  json (data, statusCode = 200) {
    return this.send(
      JSON.stringify(data),
      statusCode,
      'application/json'
    )
  },

  html (body, statusCode = 200) {
    return this.send(
      body,
      statusCode,
      'text/html'
    )
  },

  fail (errorOrMessage, statusCode = 400) {
    const message = errorOrMessage.message || errorOrMessage

    return this.send(
      message,
      statusCode
    )
  }
}
