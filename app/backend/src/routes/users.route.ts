import { Router } from 'express';
import UserController from '../controllers/User.controller';

const userRouter = Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getById);

export default userRouter;
