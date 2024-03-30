import bcrypt from 'bcrypt'

const util = {
  hashPassword: async (password) => {
    return bcrypt.hash(password, 10)
  },

  comparePassword: async (password, hash) => {
    return bcrypt.compare(password, hash)
  },

  generateSalt: async () => {
    return bcrypt.genSalt(10)
  },
}

export default util
