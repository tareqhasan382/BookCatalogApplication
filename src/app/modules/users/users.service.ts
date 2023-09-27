import { Users } from '@prisma/client';

import prisma from '../../../shared/prisma';
import { IUser } from './user.interface';

const getUsers = async (): Promise<IUser[] | null> => {
  const result = await prisma.users.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  //const { id, name, email, role, contactNo, address, profileImg } = result;
  return result;
};

const getSingle = async (id: string): Promise<IUser | null> => {
  const result = await prisma.users.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return result;
};
const updateUser = async (
  id: string,
  payload: Users
): Promise<IUser | null> => {
  const result = await prisma.users.update({
    where: { id },
    data: payload,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return result;
};
const deleteUser = async (id: string): Promise<Users | null> => {
  const result = await prisma.users.delete({ where: { id } });
  return result;
};
export const UserService = {
  getUsers,
  getSingle,
  updateUser,
  deleteUser,
};
