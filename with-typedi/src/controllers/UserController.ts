import { Request, Response } from 'express';
import { Service } from 'typedi';
import UserService from '../services/UserService';

@Service()
class UserController {
  constructor(private userService: UserService) { }

  getAllUsers(_req: Request, _res: Response) {
    const users = this.userService.getAllUsers()
    return {
      users
    }
  }
}

export default UserController