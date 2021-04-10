import { Service } from 'typedi'

@Service()
class UserService {
  getAllUsers(): string[] {
    return ['Emily', 'Diana', 'Barbara']
  }
}

export default UserService