//models/ user_routes.ts

import { Router } from 'express';
import { registerUser,
     loginUser,
     getAllUsers,
     logoutUser

} from '../controllers/user_controllers';


const router = Router();


//1. register a new user
router.post('/register', registerUser);

//2. login a user

router.post('/login',loginUser);

// get all users
router.get('/',getAllUsers);

//logout
router.get('/logout',logoutUser);










export default router;