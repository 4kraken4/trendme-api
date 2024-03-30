import userRepository from './user.repository.js'

const userService = {
  create: async (user) => {
    try {
      const userExists = await userRepository.findByEmail(user.email)
      if (userExists) {
        throw new Error('UserExistsError')
      }
      return await userRepository.create(user)
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
        error = new Error('UserExistsError')
      }
      throw error
    }
  },

  changePassword: async (user) => {
    try {
      const updatedUser = await userRepository.update(user)
      if (!updatedUser) {
        throw new Error('UserNotFoundError')
      }
      return updatedUser
    } catch (error) {
      throw error
    }
  },

  remove: async (id) => {
    try {
      const deleted = await userRepository.remove(id)
      if (!deleted) {
        throw new Error('UserNotFoundError')
      }
      return deleted.id
    } catch (error) {
      throw error
    }
  },

  findById: async (id) => {
    try {
      const user = await userRepository.findById(id)
      if (!user) {
        throw new Error('UserNotFoundError')
      }
      return user
    } catch (error) {
      throw error
    }
  },

  findByEmail: async (email) => {
    try {
      const user = await userRepository.findByEmail(email)
      if (!user) {
        throw new Error('UserNotFoundError')
      }
      return user
    } catch (error) {
      throw error
    }
  },

  findAll: async () => {
    try {
      const list = await userRepository.findAll()
      if (!list) {
        throw new Error('UserNotFoundError')
      }
      return list
    } catch (error) {
      throw error
    }
  },
  updateUser: async (user) => {
    try {
      const updatedUser = await userRepository.update(user)
      if (!updatedUser) {
        throw new Error('UserNotFoundError')
      }
      return updatedUser
    } catch (error) {
      throw error
    }
  },
}

export default userService
