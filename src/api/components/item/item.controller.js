import ItemService from './item.service.js'

const ItemController = {
  create: async (req, res, next) => {
    try {
      const item = await ItemService.createItem(req.body)
      res.status(201).json(item)
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const item = await ItemService.updateItem(req.params.id, req.body)
      res.status(200).json(item)
    } catch (error) {
      next(error)
    }
  },
  remove: async (req, res, next) => {
    try {
      const item = await ItemService.deleteItem(req.params.id)
      res.status(200).json(item)
    } catch (error) {
      next(error)
    }
  },
  findById: async (req, res, next) => {
    try {
      const item = await ItemService.getItemById(req.params.id)
      res.status(200).json(item)
    } catch (error) {
      next(error)
    }
  },
  findAll: async (req, res, next) => {
    try {
      const items = await ItemService.getAllItems()
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  findByAllCategories: async (req, res, next) => {
    try {
      const items = await ItemService.getItemsByCategories()
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  findByCategory: async (req, res, next) => {
    try {
      const items = await ItemService.getItemsByCategory(req.params.category)
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  findByAllTags: async (req, res, next) => {
    try {
      const items = await ItemService.getItemsByTags()
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  findByTag: async (req, res, next) => {
    try {
      const items = await ItemService.getItemsByTag(req.params.tag)
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  async findItemsByTagInCategorically(req, res, next) {
    try {
      const items = await ItemService.getItemsByTagInCategorically(
        req.params.tag
      )
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
  async searchItems(req, res, next) {
    try {
      const { category, query } = req.params
      const items = await ItemService.searchItems(category, query)
      res.status(200).json(items)
    } catch (error) {
      next(error)
    }
  },
}

export default ItemController
