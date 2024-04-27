import authService from './auth.service.js'

const authController = {
  register: async (req, res, next) => {
    try {
      const user = await authService.register(req.body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },
  authenticate: async (req, res, next) => {
    try {
      const user = await authService.authenticate(req.body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  getUserFromToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) throw new Error('TokenNotProvidedError')
      const user = await authService.getUserFromToken(token)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  logout: async (req, res, next) => {
    try {
      const tokenUpdated = await authService.logout(token)
      res.status(200).json(tokenUpdated)
    } catch (error) {
      next(error)
    }
  },
  logoutFromAllDevices: async (req, res, next) => {
    try {
      const tokenUpdated = await authService.logoutFromAllDevices(token)
      res.status(200).json(tokenUpdated)
    } catch (error) {
      next(error)
    }
  },
}

export default authController
