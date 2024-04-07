import router from 'express'
import CartController from './cart.controller.js'
import cartValidator from './middleware/cart.request.js'

const CartRouter = router()

CartRouter.post('/', CartController.create)
CartRouter.put('/:id', CartController.update)
CartRouter.delete('/:id', CartController.remove)
CartRouter.get('/:id', CartController.findById)
CartRouter.get(
  '/user/:userId',
  cartValidator.findByUser,
  CartController.findByUser
)
CartRouter.put('/:id/status', CartController.updateStatus)

export default CartRouter
