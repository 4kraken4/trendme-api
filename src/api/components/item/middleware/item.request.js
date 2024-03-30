import CATEGORY from '../../../enum/categoty.js'
import validator from '../../../middleware/validate.js'

const itemValidator = {
  createItem: async (req, res, next) => {
    try {
      if (
        !req.body.name.trim() ||
        !req.body.category.trim() ||
        !req.body.price ||
        !req.body.stock
      ) {
        throw new Error('BadRequest')
      }

      if (
        !validator.validateString(req.body.name) ||
        !validator.validateString(req.body.category) ||
        !validator.validateNumber(req.body.price) ||
        !validator.validateNumber(req.body.stock)
      ) {
        throw new Error('BadRequest')
      }

      if (!Object.values(CATEGORY).includes(req.body.category)) {
        throw new Error('InvalidCategoryError')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  updateItem: async (req, res, next) => {
    try {
      if (
        !req.params.id ||
        !req.body.name.trim() ||
        !req.body.category.trim() ||
        !req.body.price ||
        !req.body.stock
      ) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  removeItem: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  findById: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }

      if (!validator.validateNumber(req.params.id)) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },
}

export default itemValidator
