import { ObjectId } from 'mongodb'

class CrudService {
  constructor(collection) {
    this.collection = collection
  }

  async create(data) {
    try {
      const result = await this.collection.insertOne(data)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async get(query) {
    try {
      const result = await this.collection.find(query).toArray()
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id) {
    try {
      return await this.collection.findOne({ _id: ObjectId(id) })
    } catch (error) {
      throw error
    }
  }

  async update(query, data) {
    try {
      const result = await this.collection.updateOne(query, { $set: data })
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async updateById(id, data) {
    try {
      const result = await this.collection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: 'after' }
      )
      return result.value
    } catch (error) {
      throw error
    }
  }

  async delete(query) {
    try {
      const result = await this.collection.deleteOne(query)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async deleteById(id) {
    try {
      const result = await this.collection.findOneAndDelete({
        _id: ObjectId(id),
      })
      return result.value
    } catch (error) {
      throw error
    }
  }
}

export default CrudService
