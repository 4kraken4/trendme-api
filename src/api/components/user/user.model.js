import mongoose from '../../../../db/mongoose.js'
import ROLES from '../../enum/role.js'
/**
 * Represents a User in the system.
 * @typedef {Object} User
 * @property {string} id - The unique identifier for the user.
 * @property {string} username - The username of the user.
 * @property {string} email - The email address of the user.
 */

/**
 * Represents the User schema in the database.
 * @type {mongoose.Schema}
 */
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      default: 1,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: ROLES.USER,
    },
  },
  {
    timestamps: true,
    collection: 'Users',
  }
)

/**
 * Represents the User model.
 * @type {mongoose.Model<User>}
 */
const User = mongoose.model('User', UserSchema)

export default User
