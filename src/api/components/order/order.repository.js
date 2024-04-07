import Counter from '../../../../db/counter.js'
import Order from './order.model.js'

const OrderRepository = {
  async createOrder(order) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'orderId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    if (counter) {
      order.id = counter.seq
    }
    return await Order.create(order)
  },
  async getOrderById(id) {
    return await Order.findOne({ id })
  },
  async updateOrder(id, order) {
    return await Order.findOneAndUpdate({ id }, order, { new: true })
  },
  async deleteOrder(id) {
    return await Order.findOneAndDelete({ id })
  },
  async getOrderByUser(userId) {
    return await Order.findOne({ userId, status: 'active' })
  },
}

export default OrderRepository
