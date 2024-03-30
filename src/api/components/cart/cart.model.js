import mongoose from '../../../../db/mongoose.js'

const CartSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      default: 1,
    },
    userId: {
      type: Number,
      required: true,
      trim: true,
    },
    items: [
      {
        itemId: {
          type: Number,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: 'Carts',
  }
)

const Cart = mongoose.model('Cart', CartSchema)

export default Cart
