import { injectable } from 'inversify'
import UserService from './UserService'

@injectable()
class UserServiceImpl implements UserService {
  getAllUsers(): string[] {
    return ['Emily', 'Diana', 'Barbara']
  }
}

export default UserServiceImpl