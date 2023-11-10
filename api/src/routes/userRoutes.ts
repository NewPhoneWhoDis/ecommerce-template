import {Router} from 'express';
import {
	loggedUser,
	registerUser,
} from '../controllers/userController.controler';

const router = Router();

router.post('/login', loggedUser);
router.post('/register', registerUser);

export default router;
