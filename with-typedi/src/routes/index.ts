import express from 'express'
import Container from 'typedi'
import UserController from '../controllers/UserController'

const router = express.Router()
const userController = Container.get(UserController)

router.get('/users', (req, res) => res.json(userController.getAllUsers(req, res)))

export default router