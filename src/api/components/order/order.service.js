import OrderRepository from './order.repository.js'

const OrderService = {
  async createOrder(order) {
    return await OrderRepository.createOrder(order)
  },
  async getOrderById(id) {
    return await OrderRepository.getOrderById(id)
  },
  async updateOrder(id, order) {
    return await OrderRepository.updateOrder(id, order)
  },
  async deleteOrder(id) {
    return await OrderRepository.deleteOrder(id)
  },
  async getOrderByUser(userId) {
    return await OrderRepository.getOrderByUser(userId)
  },
}

export default OrderService
