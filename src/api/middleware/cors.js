/**
 * Middleware function to handle CORS (Cross-Origin Resource Sharing) headers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function corsHandler(req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'http://localhost:4200/weather-client'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  if (req.method === 'OPTIONS') {
    res.setHeader(
      'Access-Control-Expose-Headers',
      'Content-Type, Authorization'
    )
    return res.sendStatus(204)
  }
  next()
}

export default corsHandler
