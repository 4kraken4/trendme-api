import Counter from '../../../db/counter.js'
import Token from './jwt.model.js'

const TokenRepository = {
  async createToken(token) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'tokenId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    if (counter) {
      token.id = counter.seq
    }
    return await Token.create(token)
  },
  async getTokenByUserId(userId) {
    return await Token.findOne({ userId })
  },
  async getTokenByToken(token) {
    return await Token.findOne({ token })
  },
  async getTokensByUserId(userId) {
    return await Token.find({ userId })
  },
  async updateToken(token) {
    return await Token.findOneAndUpdate(
      { id: token.id },
      {
        $set: {
          revoked: token.revoked,
          expired: token.expired,
        },
      },
      { new: true, runValidators: true }
    )
  },
  async revokeAllTokens(userId) {
    return await Token.updateMany(
      { userId: { $in: userId } },
      {
        $set: {
          revoked: true,
          expired: true,
        },
      }
    )
  },
}

export default TokenRepository
