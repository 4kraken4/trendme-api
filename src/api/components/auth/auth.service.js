import tokenService from '../../../services/jwt/jwt.service.js'
import util from '../../../util/util.js'
import userService from '../user/user.service.js'
import { AuthResponse } from './auth.model.js'

const authService = {
  register: async (registerRequest) => {
    try {
      const request = {
        email: registerRequest.email,
        passwordHash: await util.hashPassword(registerRequest.password),
      }

      const newUser = await userService.create(request)
      const accessToken = (await tokenService.accessToken(newUser)).token
      const refreshToken = (await tokenService.refreshToken(newUser)).token
      return new AuthResponse({ accessToken, refreshToken })
    } catch (error) {
      if (
        error.code === 11000 &&
        error.keyPattern &&
        error.keyPattern.username
      ) {
        error = new Error('UserExistsError')
      }
      throw error
    }
  },

  authenticate: async (authRequest) => {
    try {
      const user = await userService.findByEmail(authRequest.email)
      if (!user) {
        throw new Error('UserNotFoundError')
      }

      if (
        (await util.comparePassword(
          authRequest.password,
          user.passwordHash
        )) === false
      ) {
        throw new Error('BadCredentialsError')
      }
      await tokenService.revokeAllTokens(user.id)
      const accessToken = (await tokenService.accessToken(user)).token
      const refreshToken = (await tokenService.refreshToken(user)).token
      return new AuthResponse({ accessToken, refreshToken })
    } catch (error) {
      throw error
    }
  },

  logout: async (token) => {
    try {
      const revokedToken = await tokenService.revokeToken(token)
      return revokedToken
    } catch (error) {
      throw error
    }
  },

  logoutFromAllDevices: async (token) => {
    try {
      const userId = tokenService.getUserIdFromToken(token)
      const revokedToken = await tokenService.revokeAllTokens(userId)
      return revokedToken
    } catch (error) {
      throw error
    }
  },
}

export default authService
