import CartService from '../cart/cart.service.js'
import OrderService from './order.service.js'

const OrderController = {
  create: async (req, res, next) => {
    try {
      const orderReq = req.body
      const order = await OrderService.createOrder(orderReq)
      if (order) {
        const cartId = orderReq.cartId
        CartService.updateCartStatus(cartId, 'ordered')
      }
      res.status(201).json(order)
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const order = await OrderService.updateOrder(req.params.id, {
        order: req.body,
        userId: req.user.id,
      })
      res.status(200).json(order)
    } catch (error) {
      next(error)
    }
  },
  remove: async (req, res, next) => {
    try {
      const order = await OrderService.deleteOrder(req.params.id)
      res.status(200).json(order)
    } catch (error) {
      next(error)
    }
  },
  findById: async (req, res, next) => {
    try {
      const order = await OrderService.getOrderById(req.params.id)
      res.status(200).json(order)
    } catch (error) {
      next(error)
    }
  },
  findByUser: async (req, res, next) => {
    try {
      const order = await OrderService.getOrderByUser(req.user.id)
      res.status(200).json(order)
    } catch (error) {
      next(error)
    }
  },
}

export default OrderController
