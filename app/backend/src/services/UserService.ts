import UserModel, { UserAtributes } from '../database/models/User.model';

class UserService {
  public static async getAll(): Promise<UserAtributes[]> {
    const allusers = await UserModel.findAll();

    return allusers;
  }

  public static async getById(id: number) {
    const user = await UserModel.findOne({ where: { id } });

    if (!user) throw new Error('NOT FOUND');

    return user;
  }
}

export default UserService;
