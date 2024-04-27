import router from 'express'
import authController from './auth.controller.js'
import authValidater from './middleware/auth.request.js'

const authRouter = router()

authRouter.post(
  '/register',
  await authValidater.register,
  authController.register
)
authRouter.get('/me', authController.getUserFromToken)
authRouter.post(
  '/login',
  await authValidater.authenticate,
  authController.authenticate
)
authRouter.post('/logout', authValidater.logout, authController.logout)
authRouter.post(
  '/logoutall',
  authValidater.logoutFromAllDevices,
  authController.logoutFromAllDevices
)

export default authRouter
