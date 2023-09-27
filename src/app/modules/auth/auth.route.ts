import express from 'express';
import { AuthControlller } from './auth.controller';
const router = express.Router();
router.post('/auth/signup', AuthControlller.signup);
router.post('/auth/signin', AuthControlller.login);
router.post('/auth/refresh-token', AuthControlller.refreshtoken);
router.post('/auth/logout', AuthControlller.logOut);

export const AuthRoutes = router;
