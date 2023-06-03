import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

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
}

export default UserController;
