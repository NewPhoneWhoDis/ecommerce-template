import {Router} from 'express';
import {registerUser} from '../auth/userController.controler';

const router = Router();

router.post('/register', registerUser);

export default router;
