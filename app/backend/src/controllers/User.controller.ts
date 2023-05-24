import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public static async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAll();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const users = await UserService.getById(+id);
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
