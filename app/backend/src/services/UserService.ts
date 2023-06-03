import { compareSync } from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import UserModel from '../database/models/User.model';

class UserService {
  public static async login(email: string, password: string): Promise<string> {
    const BAD_REQUEST = 'BAD_REQUEST';
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new Error(BAD_REQUEST);
    }

    if (!email || !password) {
      throw new Error(BAD_REQUEST);
    }

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword) {
      throw new Error(BAD_REQUEST);
    }

    return generateToken(user.id);
  }
}

export default UserService;
