import 'express-async-errors';
import { LoginController } from './controllers/loginController';
import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { authMiddleware } from './middlewares/authMiddleware';

const router = Router();

router.post('/user', new UserController().create);
router.post('/login', new LoginController().login);
router.get('/profile', authMiddleware, new UserController().getProfile);

export default router;