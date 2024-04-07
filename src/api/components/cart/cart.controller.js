import CartService from './cart.service.js'

const CartController = {
  create: async (req, res, next) => {
    try {
      const cartReq = {
        userId: req.user.id,
        items: req.body.items,
      }
      const cart = await CartService.createCart(cartReq)
      res.status(201).json(cart)
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const cart = await CartService.updateCart(req.params.id, {
        cart: req.body,
        userId: req.user.id,
      })
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
      const cart = await CartService.getCartByUser(req.user.id)
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
  updateStatus: async (req, res, next) => {
    try {
      const cart = await CartService.updateCartStatus(
        req.params.id,
        req.body.status
      )
      res.status(200).json(cart)
    } catch (error) {
      next(error)
    }
  },
}

export default CartController
