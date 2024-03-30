import router from 'express'
import CartController from './cart.controller.js'

const CartRouter = router()

CartRouter.post('/cart', CartController.create)
CartRouter.put('/cart/:id', CartController.update)
CartRouter.delete('/cart/:id', CartController.remove)
CartRouter.get('/cart/:id', CartController.findById)
CartRouter.get('/cart/user/:userId', CartController.findByUser)

export default CartRouter
