import validator from '../../../middleware/validate.js'

const userValidator = {
  accessControl: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },
  findAll: async (req, res, next) => {
    try {
      next()
    } catch (error) {
      next(error)
    }
  },

  removeUser: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }
    } catch (error) {
      next(error)
    }
  },

  findById: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },

  findByEmail: async (req, res, next) => {
    try {
      if (!req.params.email) {
        throw new Error('BadRequest')
      }

      if (!validator.validateEmail(email)) {
        throw new Error('InvalidEmailError')
      }

      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },

  changePassword: async (req, res, next) => {
    try {
      if (!req.body) {
        throw new Error('BadRequest')
      }

      if (!validator.validatePassword(req.body.password)) {
        throw new Error('InvalidPasswordError')
      }

      next()
    } catch (error) {
      next(error)
    }
  },
}

export default userValidator
