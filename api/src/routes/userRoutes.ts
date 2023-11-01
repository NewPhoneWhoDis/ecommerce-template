import {Router} from 'express';
import {loggedUser} from '../auth/userController.controler';

const router = Router();

router.post('/login', loggedUser);

export default router;
