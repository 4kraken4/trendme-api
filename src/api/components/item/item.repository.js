import Counter from '../../../../db/counter.js'
import Item from './item.model.js'

const ItemRepository = {
  async createItem(item) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'itemId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    if (counter) {
      item.id = counter.seq
    }
    return await Item.create(item)
  },
  async getItemById(id) {
    return await Item.findOne({ id })
  },
  async updateItem(id, item) {
    return await Item.findOneAndUpdate({ id }, item, { new: true })
  },
  async deleteItem(id) {
    return await Item.findOneAndDelete({ id })
  },
  async getAllItems() {
    return await Item.find()
  },
  async getItemsByCategory(category) {
    return await Item.find({ category })
  },
  async getItemByTagInCategorically(tag) {
    return await Item.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $match: {
          tags: tag,
        },
      },
      {
        $group: {
          _id: '$category',
          items: {
            $push: {
              id: '$id',
              name: '$name',
              image: '$image',
              unitPrice: '$unitPrice',
              description: '$description',
              tags: '$tags',
            },
          },
        },
      },
    ])
  },
  async searchItems(searchQuery) {
    Item.aggregate
    const results = await Item.find(searchQuery).limit(10)
    return results
  },
}

export default ItemRepository
