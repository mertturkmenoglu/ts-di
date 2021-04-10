import 'reflect-metadata'

import express from 'express'
import routes from './routes'

const app = express()

app.use('/api/v1', routes)

app.listen(4000, () => {
  console.log('Server started listening on http://localhost:4000')
})