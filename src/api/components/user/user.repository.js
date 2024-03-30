import Counter from '../../../../db/counter.js'
import User from './user.model.js'

const findById = async (id) => {
  return await User.findOne({ id })
}

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const update = async (user) => {
  return await User.findOneAndUpdate(
    { id: user.id },
    { $set: { role: user.role } },
    { new: true, runValidators: true }
  )
}

const remove = async (id) => {
  return await User.findOneAndDelete({ id })
}

const create = async (user) => {
  const counter = await Counter.findOneAndUpdate(
    { id: 'userid' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
  if (counter) {
    user.id = counter.seq
  }
  return await User.create(user)
}

const findAll = async () => {
  return await User.find()
}

const userRepository = {
  findById,
  findByEmail,
  update,
  remove,
  create,
  findAll,
}

export default userRepository
