import {Router} from 'express';
import {logUser, registerUser} from '../controllers/userController.controler';

const router = Router();

router.post('/login', logUser);
router.post('/register', registerUser);

export default router;
