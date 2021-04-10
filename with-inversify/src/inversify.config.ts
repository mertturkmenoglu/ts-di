import { Container } from 'inversify'
import UserService from './services/UserService'
import UserServiceImpl from './services/UserServiceImp'
import { TYPES } from './types'

const container = new Container()
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl)

export { container }