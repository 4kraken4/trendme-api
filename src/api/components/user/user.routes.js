import router from 'express'
import ROLES from '../../enum/role.js'
import jwtAuthorize from '../../middleware/jwtFilterChain.js'
import userValidator from './middleware/user.request.js'
import userController from './user.controller.js'

const userRouter = router()

userRouter.delete(
  '/:id',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.accessControl],
  userController.remove
)
userRouter.get(
  '/:id',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.accessControl],
  userController.findById
)
userRouter.get(
  '/',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.findAll],
  userController.findAll
)
userRouter.put(
  '/promote/:id',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.accessControl],
  userController.promoteUser
)
userRouter.put(
  '/demote/:id',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.accessControl],
  userController.demoteUser
)
userRouter.put(
  '/change-password',
  [await jwtAuthorize([ROLES.ADMIN]), userValidator.accessControl],
  userController.changePassword
)

export default userRouter
