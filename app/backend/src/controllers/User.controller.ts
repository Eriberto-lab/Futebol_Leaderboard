import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';
import { decodeToken } from '../utils/jwt';

class UserController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const users = await UserService.login(email, password);
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public static userRole(req: Request, res: Response) {
    const { authorization } = req.headers;

    const data: any = decodeToken(authorization as string);

    return res.status(200).json({ role: data.role });
  }
}

export default UserController;
