import { Router } from 'express'
import authRouter from './components/auth/auth.route.js'
import CartRouter from './components/cart/cart.routes.js'
import ItemRouter from './components/item/item.routes.js'
import userRouter from './components/user/user.routes.js'
import ROLES from './enum/role.js'
import jwtAuthorize from './middleware/jwtFilterChain.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'SLWether API V1.0.0' })
})

router.use('/auth', await jwtAuthorize([ROLES.ADMIN, ROLES.USER]), authRouter)
router.use('/user', userRouter)
router.use('/cart', await jwtAuthorize([ROLES.ADMIN, ROLES.USER]), CartRouter)
router.use('/item', ItemRouter)

export default router
