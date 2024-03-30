import adminService from './admin.service.js'
import userService from './user.service.js'

const userController = {
  remove: async (req, res, next) => {
    try {
      const user = await userService.remove(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  changePassword: async (req, res, next) => {
    try {
      const user = await userService.changePassword(req.body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  findById: async (req, res, next) => {
    try {
      const user = await userService.findById(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  findByEmail: async (req, res, next) => {
    try {
      const user = await userService.findByEmail(req.params.email)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  findAll: async (req, res, next) => {
    try {
      const user = await userService.findAll()
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  promoteUser: async (req, res, next) => {
    try {
      const user = await adminService.promoteUser(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
  demoteUser: async (req, res, next) => {
    try {
      const user = await adminService.demoteUser(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },
}

export default userController
