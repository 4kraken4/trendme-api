import mongoose from '../../../../db/mongoose.js'

const ItemSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      default: 1,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      text: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    unitPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    tags: [
      {
        type: String,
        required: true,
        trim: true,
        text: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'Items',
    text: true,
  }
)

const Item = mongoose.model('Item', ItemSchema)

export default Item
