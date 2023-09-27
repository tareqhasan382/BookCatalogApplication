import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const token = req.headers.authorization;
  const verifiedUser = jwtHelpers.verifyToken(
    token as string,
    process.env.secret as Secret
  );

  const userId = verifiedUser.userId;
  const orderData = {
    userId: userId,
    orderedBooks: data.orderedBooks, // Assuming your data structure matches the request data
  };
  const result = await OrderService.createOrder(orderData);
  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully !!',
    data: result,
  });
});

const getOrders = catchAsync(async (req: Request, res: Response) => {
  // console.log('cokkies:', req.cookies);
  const token = req.headers.authorization;
  const verifiedUser = jwtHelpers.verifyToken(
    token as string,
    process.env.secret as Secret
  );
  // console.log(verifiedUser.role);

  try {
    const result = await OrderService.getOrders(verifiedUser);
    sendResponse<Order[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order retrieved successfully !!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'somthing went wrong !!',
      data: error,
    });
  }
});
const getOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getOrder(req.params.orderId);
  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully !!',
    data: result,
  });
});

export const OrderControlller = {
  createOrder,
  getOrders,
  getOrder,
};
