import mongoose from '../../../db/mongoose.js'

const ApikeySchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    apikey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    owner: {
      role: {
        type: String,
        required: true,
        trim: true,
      },
      id: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    revoked: {
      type: Boolean,
      required: true,
    },
    expired: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'Apikeys',
  }
)

const Apikey = mongoose.model('Apikey', ApikeySchema)
export default Apikey
