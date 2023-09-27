import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/book/book.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { OrderRoutes } from '../modules/orders/order.route';
import { UserRoutes } from '../modules/users/users.route';
const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/',
    route: AuthRoutes,
  },
  {
    path: '/',
    route: CategoryRoutes,
  },
  {
    path: '/',
    route: BookRoutes,
  },
  {
    path: '/',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
