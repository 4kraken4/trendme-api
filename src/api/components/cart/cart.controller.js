import CartService from './cart.service.js'

const CartController = {
  create: async (req, res, next) => {
    try {
      const cart = await CartService.createCart(req.body)
      res.status(201).json(cart)
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const cart = await CartService.updateCart(req.params.id, req.body)
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
  remove: async (req, res, next) => {
    try {
      const cart = await CartService.deleteCart(req.params.id)
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
  findById: async (req, res, next) => {
    try {
      const cart = await CartService.getCartById(req.params.id)
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
  findByUser: async (req, res, next) => {
    try {
      const cart = await CartService.getCartByUser(req.params.userId)
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
}

export default CartController
