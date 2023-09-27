import { Order } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';
import { ICreateOrderData } from './order.interface';

const createOrder = async (orderData: ICreateOrderData) => {
  const result = await prisma.order.create({ data: orderData });
  return result;
};
// orderBy userId
const getOrders = async (verifiedUser: JwtPayload): Promise<Order[] | null> => {
  if (verifiedUser.role == 'admin') {
    // console.log('verifiedUser Admin');
    const result = await prisma.order.findMany();
    // console.log(result);
    return result;
  } else {
    // console.log('customer');
    const result = await prisma.order.findMany({
      where: { userId: verifiedUser.userId },
    });
    // console.log(result);
    return result;
  }
};

const getOrder = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: { id },
  });
  return result;
};

export const OrderService = {
  createOrder,
  getOrders,
  getOrder,
};
