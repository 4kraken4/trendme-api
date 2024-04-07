import router from 'express'
import OrderController from './order.controller.js'

const OrderRouter = router()

OrderRouter.post('/', OrderController.create)
OrderRouter.put('/:id', OrderController.update)
OrderRouter.delete('/:id', OrderController.remove)
OrderRouter.get('/:id', OrderController.findById)
OrderRouter.get('/user/:userId', OrderController.findByUser)

export default OrderRouter
