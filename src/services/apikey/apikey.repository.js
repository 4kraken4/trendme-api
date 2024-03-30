import counter from '../../../db/counter.js'
import keyGenerator from './apikey.generator.js'
import Apikey from './apikey.model.js'

const ApikeyRepository = {
  create: async (key) => {
    const counterDoc = await counter.findOneAndUpdate(
      { id: 'apikeyId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    if (counterDoc) {
      key.id = counterDoc.seq
      const newKey = await keyGenerator.generate(64)
      key.apikey = newKey
    }
    return await Apikey.create(key)
  },

  remove: async (id) => {
    return await Apikey.findOneAndDelete({ id })
  },

  findById: async (id) => {
    return await Apikey.findOne({ id })
  },

  findByApikey: async (apikey) => {
    return await Apikey.findOne({ apikey })
  },
  findByOwner: async (role, entityId) => {
    return await Apikey.findOne({ 'owner.role': role, 'owner.id': entityId })
  },
}

export default ApikeyRepository
