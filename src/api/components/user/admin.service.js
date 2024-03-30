import tokenService from '../../../services/jwt/jwt.service.js'
import ROLES from '../../enum/role.js'
import userService from '../user/user.service.js'

const adminService = {
  promoteUser: async (id) => {
    try {
      const user = await userService.findById(id)
      if (!user) {
        throw new Error('UserNotFoundError')
      }
      if (user.role === ROLES.ADMIN) {
        throw new Error('PrivilegeConflictError')
      }

      user.role = ROLES.ADMIN
      const updatedUser = await userService.updateUser(user)
      return await tokenService.revokeAllTokens(updatedUser.id)
    } catch (error) {
      throw error
    }
  },

  demoteUser: async (id) => {
    try {
      const user = await userService.findById(id)
      if (!user) {
        throw new Error('UserNotFoundError')
      }
      if (user.role === ROLES.USER) {
        throw new Error('PrivilegeConflictError')
      }
      user.role = ROLES.USER
      const updatedUser = await userService.updateUser(user)
      return await tokenService.revokeAllTokens(updatedUser.id)
    } catch (error) {
      throw error
    }
  },
}

export default adminService
