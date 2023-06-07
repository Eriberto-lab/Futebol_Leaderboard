import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { tokenError } from '../middlewares/error.middleware';

const userRouter = Router();

userRouter.post('/', UserController.login);
userRouter.get('/role', tokenError, UserController.userRole);

export default userRouter;
