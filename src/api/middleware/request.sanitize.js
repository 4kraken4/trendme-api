const sanitizer = {
  sanitizeRequest: (req, res, next) => {
    req.body = sanitizeObject(req.body)
    req.params = sanitizeObject(req.params)
    req.query = sanitizeObject(req.query)
    next()
  },
}

function sanitizeObject(obj) {
  if (obj) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        sanitizeObject(obj[key])
      } else if (typeof obj[key] === 'string') {
        obj[key] = sanitizeString(obj[key])
      }
    })
  }
  return obj
}

function sanitizeString(str) {
  if (str) {
    str = str.trim()
    str = str.replace(/  +/g, ' ')
    str = str.replace(/\s\s+/g, ' ')
    str = str.replace(/\t/g, '')
    str = str.replace(/\n/g, '')
    str = str.replace(/\r/g, '')
    str = str.replace(/<[^>]*>/g, '')
    str = str.replace(/&/g, '&amp;')
    str = str.replace(/"/g, '&quot;')
    str = str.replace(/'/g, '&#39;')
    str = str.replace(/</g, '&lt;')
    str = str.replace(/>/g, '&gt;')
    str = str.replace(/ /g, '&nbsp;')
    str = str.replace(/¡/g, '&iexcl;')
  }
  return str
}

export default sanitizer
