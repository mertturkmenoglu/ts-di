import 'reflect-metadata'

import express from 'express'

import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './inversify.config'

import './controllers/UserController'

const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(express.json())
})

const instance = server.build()

instance.listen(4000, () => {
  console.log('Server started on http://localhost:4000')
})