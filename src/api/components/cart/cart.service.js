import CartRepository from './cart.repository.js'

const CartService = {
  async createCart(cart) {
    return await CartRepository.createCart(cart)
  },
  async getCartById(id) {
    return await CartRepository.getCartById(id)
  },
  async updateCart(id, data) {
    const { cart, userId } = data
    const { items } = cart
    const newCart = { userId, items }
    return await CartRepository.updateCart(id, newCart)
  },
  async deleteCart(id) {
    return await CartRepository.deleteCart(id)
  },
  async getCartByUser(userId) {
    return await CartRepository.getCartByUser(userId)
  },

  async updateCartStatus(cartId, status) {
    return await CartRepository.updateCartStatus(cartId, status)
  },
}

export default CartService
