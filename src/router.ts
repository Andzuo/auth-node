import 'express-async-errors';
import { LoginController } from './controllers/loginController';
import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

router.post('/user', new UserController().create);
router.post('/login', new LoginController().login);

export default router;