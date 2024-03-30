import validator from '../../../middleware/validate.js'

const authValidater = {
  register: async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        throw new Error('BadRequest')
      }

      if (!validator.validateEmail(email)) {
        throw new Error('InvalidEmailError')
      }

      if (!validator.validatePassword(password)) {
        throw new Error('InvalidPasswordError')
      }
      req.body.email = email.trim().toLowerCase()

      next()
    } catch (error) {
      next(error)
    }
  },
  authenticate: async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        throw new Error('BadRequest')
      }

      if (!validator.validateEmail(email)) {
        throw new Error('InvalidEmailError')
      }

      if (!validator.validatePassword(password)) {
        throw new Error('InvalidPasswordError')
      }
      req.body.email = email.trim().toLowerCase()

      next()
    } catch (error) {
      next(error)
    }
  },
  logout: (req, res, next) => {
    try {
      const authHeader = req.headers['authorization']
      if (!authHeader) throw new Error('AuthorizationHeaderMissingError')

      const token = authHeader && authHeader.split(' ')[1]
      if (!token) throw new Error('TokenNotProvidedError')

      next()
    } catch (error) {
      next(error)
    }
  },
  logoutFromAllDevices: (req, res, next) => {
    try {
      const authHeader = req.headers['authorization']
      if (!authHeader) throw new Error('AuthorizationHeaderMissingError')

      const token = authHeader && authHeader.split(' ')[1]
      if (!token) throw new Error('TokenNotProvidedError')

      next()
    } catch (error) {
      next(error)
    }
  },
}

export default authValidater
