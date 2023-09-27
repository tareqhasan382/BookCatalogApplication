import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderControlller } from './order.controller';

const router = express.Router();
router.post(
  '/orders/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderControlller.createOrder
);
router.get(
  '/orders',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),

  OrderControlller.getOrders
);
router.get(
  '/orders/:orderId',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderControlller.getOrder
);

export const OrderRoutes = router;
//orders/create-order
