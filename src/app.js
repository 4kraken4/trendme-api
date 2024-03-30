import app from './api/server.js'
import config from './config/app.config.js'

const PORT = config.getInstance().api.port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
