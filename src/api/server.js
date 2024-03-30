import express from 'express'
import config from '../config/app.config.js'
import corsHandler from './middleware/cors.js'
import errorHandler from './middleware/errorHandler.js'
import responseSanitizor from './middleware/response.sanitize.js'
import router from './routes.js'

const app = express()
const routePrefix = config.getInstance().api.apiRoutePrefix

// response header removal
app.disable('x-powered-by')
app.disable('etag')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(corsHandler)
app.use(routePrefix, router, responseSanitizor.removeSensitiveKeys)
app.use(errorHandler)

export default app
