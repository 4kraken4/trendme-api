import jwt from 'jsonwebtoken'
import config from '../../config/app.config.js'
import Token from './jwt.model.js'
import tokenRepository from './jwt.repository.js'

const tokenService = {
  accessToken: async (auth) => {
    const { id, email, role } = auth
    const newToken = jwt.sign(
      { id, email, role },
      config.getInstance().jwt.secret,
      {
        expiresIn: config.getInstance().jwt.expiresIn,
      }
    )
    const token = Token({
      token: newToken,
      tokenType: 'access',
      revoked: false,
      expired: false,
      userId: id,
    })

    return await tokenRepository.createToken(token)
  },

  refreshToken: async (auth) => {
    const { id, email, role } = auth
    const newToken = jwt.sign(
      { id, email, role },
      config.getInstance().jwt.secret,
      {
        expiresIn: config.getInstance().jwt.refreshTokenExpiresIn,
      }
    )
    const token = Token({
      token: newToken,
      tokenType: 'refresh',
      revoked: false,
      expired: false,
      userId: id,
    })
    return await tokenRepository.createToken(token)
  },

  verifyToken: (token) => {
    return jwt.verify(token, config.getInstance().jwt.secret)
  },

  isTokenExpired: (token) => {
    const decoded = jwt.decode(token)
    return decoded.exp < Date.now() / 1000
  },

  isTokenRevoked: async (token) => {
    const tokenRecord = await tokenRepository.getTokenByToken(token)
    return tokenRecord.revoked
  },

  revokeToken: async (token) => {
    const tokenRecord = await tokenRepository.getTokenByToken(token)
    if (!tokenRecord) {
      throw new Error('TokenDoesNotExistError')
    }
    tokenRecord.revoked = true
    tokenRecord.expired = true
    return (await tokenRepository.updateToken(tokenRecord)).revoked
  },

  revokeAllTokens: async (userId) => {
    return (await tokenRepository.revokeAllTokens(userId)).acknowledged
  },

  getUserIdFromToken: (token) => {
    const payload = jwt.decode(token)
    if (payload && payload.id) {
      return payload.id
    }
    throw new Error('InvalidTokenError')
  },
}

export default tokenService
