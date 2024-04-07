import Counter from '../../../../db/counter.js'
import Cart from './cart.model.js'

const CartRepository = {
  async createCart(cart) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'cartId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    if (counter) {
      cart.id = counter.seq
    }
    return await Cart.create(cart)
  },
  async getCartById(id) {
    return await Cart.findOne({ id })
  },
  async updateCart(id, cart) {
    return await Cart.findOneAndUpdate({ id }, cart, { new: true })
  },
  async deleteCart(id) {
    return await Cart.findOneAndDelete({ id })
  },
  async getCartByUser(userId) {
    return await Cart.findOne({ userId, status: 'active' })
  },
  async updateCartStatus(cartId, status) {
    return await Cart.findOneAndUpdate(
      { id: cartId },
      { status },
      { new: true }
    )
  },
}

export default CartRepository
