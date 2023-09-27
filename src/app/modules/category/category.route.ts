import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryControlller } from './category.controller';
const router = express.Router();
router.post(
  '/categories/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryControlller.createCategory
);
router.get(
  '/categories',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryControlller.getCatagories
);
router.get('/categories/:id', CategoryControlller.getCategory);
router.patch(
  '/categories/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryControlller.updateCategory
);
router.delete(
  '/categories/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryControlller.deleteCategory
);

export const CategoryRoutes = router;
