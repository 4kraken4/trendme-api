import ApikeyRepository from './apikey.repository.js'

const apikeyService = {
  create: async (request) => {
    try {
      const key = {
        apiKey: '',
        owner: {
          role: request.role,
          id: request.id,
        },
        revoked: false,
        expired: false,
      }
      return await ApikeyRepository.create(key)
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.apikey) {
        error = new Error('ApikeyExistsError')
      }
      throw error
    }
  },

  remove: async (id) => {
    try {
      const removedApikey = await ApikeyRepository.remove(id)
      if (!removedApikey) {
        throw new Error('ApikeyNotFoundError')
      }
      return removedApikey
    } catch (error) {
      throw error
    }
  },

  findById: async (id) => {
    try {
      const apikey = await ApikeyRepository.findById(id)
      if (!apikey) {
        throw new Error('ApikeyNotFoundError')
      }
      return apikey
    } catch (error) {
      throw error
    }
  },

  findByApikey: async (apikey) => {
    try {
      const key = await ApikeyRepository.findByApikey(apikey)
      if (!key) {
        throw new Error('ApikeyNotFoundError')
      }
      return key
    } catch (error) {
      throw error
    }
  },

  findByType: async (request) => {
    const { role, entityId } = request
    try {
      const apikey = await ApikeyRepository.findByOwner(role, entityId)
      if (!apikey) {
        throw new Error('ApikeyNotFoundError')
      }
      return apikey
    } catch (error) {
      throw error
    }
  },
}

export default apikeyService
