import { Request, Response } from 'express'
import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import UserService from '../services/UserService'
import { TYPES } from '../types'

@controller('/api/v1/users')
class UserController {
  public constructor(@inject(TYPES.UserService) private userService: UserService) { }

  @httpGet('/')
  getAllUsers(_req: Request, _res: Response): { users: string[] } {
    return {
      users: this.userService.getAllUsers()
    }
  }
}

export default UserController