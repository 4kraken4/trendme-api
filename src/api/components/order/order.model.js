import mongoose from '../../../../db/mongoose.js'

const OrderSchema = new mongoose.Schema(
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
    cartId: {
      type: Number,
      required: true,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      default: 'active',
    },
  },
  {
    timestamps: true,
    collection: 'Orders',
  }
)

const Order = mongoose.model('Order', OrderSchema)

export default Order
