import router from 'express'
import ROLES from '../../enum/role.js'
import jwtAuthorize from '../../middleware/jwtFilterChain.js'
import ItemController from './item.controller.js'

const ItemRouter = router()

ItemRouter.post('/', await jwtAuthorize([ROLES.ADMIN]), ItemController.create)
ItemRouter.delete(
  '/:id',
  await jwtAuthorize([ROLES.ADMIN]),
  ItemController.remove
)
ItemRouter.put('/item/:id', ItemController.update)
ItemRouter.delete(
  '/:id',
  await jwtAuthorize([ROLES.ADMIN]),
  ItemController.remove
)
ItemRouter.get(
  '/',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findAll
)
ItemRouter.get(
  '/tag',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findByAllTags
)
ItemRouter.get(
  '/category/',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findByAllCategories
)
ItemRouter.get(
  '/:id',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findById
)
ItemRouter.get(
  '/tag/:tag',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findByTag
)
ItemRouter.get(
  '/category/:category',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findByCategory
)
ItemRouter.get(
  '/category/tag/:tag',
  await jwtAuthorize([ROLES.ADMIN, ROLES.USER]),
  ItemController.findItemsByTagInCategorically
)

export default ItemRouter
