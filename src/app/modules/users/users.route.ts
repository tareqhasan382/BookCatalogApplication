import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserControlller } from './users.controller';
const router = express.Router();
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  UserControlller.profile
);
router.get(
  '/users',
  auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  UserControlller.getUsers
);
router.get('/users/:id', auth(ENUM_USER_ROLE.ADMIN), UserControlller.getsingle);
router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserControlller.updateUser
);
router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserControlller.deleteUser
);

export const UserRoutes = router;
