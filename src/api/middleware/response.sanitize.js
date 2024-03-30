import sensitiveKeys from '../../config/key.rules.js'

const responseSanitizor = {
  removeSensitiveKeys: (req, res, next) => {
    const originalSend = res.send

    res.send = (body) => {
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body)
        } catch (error) {
          return body
        }
      }
      if (Array.isArray(body)) {
        body.forEach((obj) => {
          if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach((key) => {
              if (sensitiveKeys.includes(key)) {
                delete obj[key]
              }
            })
          }
        })
      }
      body = JSON.stringify(body)
      originalSend.call(res, body)
    }
    next()
  },
}

export default responseSanitizor
