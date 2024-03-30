const cartValidator = {
  createCart: async (req, res, next) => {
    try {
      if (!req.body.userId || !req.body.items) {
        throw new Error('BadRequest')
      }

      if (req.body.items.length === 0) {
        throw new Error('EmptyCartError')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  updateCart: async (req, res, next) => {
    try {
      if (!req.params.id || !req.body.userId) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  removeCart: async (req, res, next) => {
    try {
      if (!req.params.id) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },

  findByUser: async (req, res, next) => {
    try {
      if (!req.params.userId) {
        throw new Error('BadRequest')
      }

      next()
    } catch (error) {
      next(error)
    }
  },
}

export default cartValidator
