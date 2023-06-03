import { Router } from 'express';
import UserController from '../controllers/User.controller';

const userRouter = Router();

userRouter.post('/', UserController.login);

export default userRouter;
