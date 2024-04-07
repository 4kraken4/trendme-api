import Config from '../../config/app.config.js'

function corsMiddleware(req, res, next) {
  const allowedOrigins = [
    Config.getInstance().client.baseUrl,
    Config.getInstance().client.baseUrtHttps,
  ]
  const origin = req.headers.origin

  if (allowedOrigins.includes(origin) || !origin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    )
    const requestedHeaders = req.headers['access-control-request-headers']
    if (requestedHeaders) {
      res.setHeader('Access-Control-Allow-Headers', requestedHeaders)
    } else {
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With'
      )
    }
    res.setHeader('Access-Control-Max-Age', 86400)
    res.setHeader('Access-Control-Allow-Credentials', true)
  } else {
    res.status(403).send('Origin not allowed')
  }

  next()
}

export default corsMiddleware
