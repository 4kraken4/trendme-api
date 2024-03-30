import CartRepository from './cart.repository.js'

const CartService = {
  async createCart(cart) {
    return await CartRepository.createCart(cart)
  },
  async getCartById(id) {
    return await CartRepository.getCartById(id)
  },
  async updateCart(id, cart) {
    return await CartRepository.updateCart(id, cart)
  },
  async deleteCart(id) {
    return await CartRepository.deleteCart(id)
  },
  async getCartByUser(userId) {
    return await CartRepository.getCartByUser(userId)
  },
}

export default CartService
