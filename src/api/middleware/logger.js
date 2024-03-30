/**
 * This middleware logs the incoming requests
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
function requestLogger(req, res, next) {
  console.log(`[${new Date()}] ${req.method} ${req.url}`)
  next()
}

/**
 * This middleware logs the outgoing responses
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
function responseLogger(req, res, next) {
  const oldSend = res.send
  res.send = function (data) {
    console.log(`[${new Date()}] ${res.statusCode} ${res.statusMessage}`)
    oldSend.call(this, data)
  }
  next()
}

export { requestLogger, responseLogger }
