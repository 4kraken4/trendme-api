import mongoose from '../../../db/mongoose.js'

const TokenSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tokenType: {
      type: String,
      required: true,
      trim: true,
    },
    revoked: {
      type: Boolean,
      required: true,
    },
    expired: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'Tokens',
  }
)

const Token = mongoose.model('Token', TokenSchema)
export default Token
