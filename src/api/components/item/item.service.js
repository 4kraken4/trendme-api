import ItemRepository from './item.repository.js'

const ItemService = {
  async createItem(item) {
    return await ItemRepository.createItem(item)
  },
  async getItemById(id) {
    return await ItemRepository.getItemById(id)
  },
  async updateItem(id, item) {
    return await ItemRepository.updateItem(id, item)
  },
  async deleteItem(id) {
    return await ItemRepository.deleteItem(id)
  },
  async getAllItems() {
    return await ItemRepository.getAllItems()
  },
  async getItemsByCategories() {
    const items = await ItemRepository.getAllItems()
    const categories = new Set()
    const itemsByCategory = []
    items.forEach((item) => {
      if (!categories.has(item.category)) {
        categories.add(item.category)
        itemsByCategory.push({ category: item.category, items: [item] })
      } else {
        itemsByCategory.forEach((category) => {
          if (category.category === item.category) {
            category.items.push(item)
          }
        })
      }
    })
    return itemsByCategory
  },
  async getItemsByCategory(category) {
    return await ItemRepository.getItemsByCategory(category)
  },
  async getItemsByTags() {
    const items = await ItemRepository.getAllItems()
    const tags = new Set()
    const itemsByTag = []
    items.forEach((item) => {
      const keys = item.tags
      if (keys) {
        keys.forEach((cat) => {
          if (!tags.has(cat)) {
            tags.add(cat)
            itemsByTag.push({ tag: cat, items: [item] })
          } else {
            tags.forEach((tag) => {
              if (tag === cat) {
                itemsByTag.find((item) => item.tag === tag).items.push(item)
              }
            })
          }
        })
      }
    })
    return itemsByTag
  },
  async getItemsByTag(keyword) {
    const items = await ItemRepository.getAllItems()
    const itemsByTag = []
    items.forEach((item) => {
      const keys = item.tags
      if (keys) {
        keys.forEach((cat) => {
          if (cat === keyword) {
            itemsByTag.push(item)
          }
        })
      }
    })
    if (itemsByTag.length === 0) {
      return itemsByTag
    }
    return { tag: keyword, items: itemsByTag }
  },
  getItemsByTagsAndCategory: async (category, tag) => {
    const items = await ItemRepository.getItemsByCategory(category)
    const itemsByTag = []
    items.forEach((item) => {
      const keys = item.tags
      if (keys) {
        keys.forEach((cat) => {
          if (cat === tag) {
            itemsByTag.push(item)
          }
        })
      }
    })
    if (itemsByTag.length === 0) {
      return itemsByTag
    }
    return { tag, items: itemsByTag }
  },

  getItemsByTagInCategorically: async (tag) => {
    return await ItemRepository.getItemByTagInCategorically(tag)
  },
  searchItems: async (category, query) => {
    const escapedSearchString = query.replace(
      /[-[\]{}()*+?.,\\^$|#\s]/g,
      '\\$&'
    )
    const searchQuery = {}

    if (category) {
      searchQuery.category = category
    }

    searchQuery.$text = { $search: escapedSearchString }
    return ItemRepository.searchItems(searchQuery)
  },
  searchItemswithActiveFilters(query) {
    return ItemRepository.searchItems(query)
  },
}

export default ItemService
