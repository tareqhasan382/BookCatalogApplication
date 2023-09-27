import { Users } from '@prisma/client';
import httpStatus from 'http-status';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import bcrypt = require('bcrypt');
const signup = async (data: Users) => {
  const { name, email, password, role, contactNo, address, profileImg } = data;
  const user = await prisma.users.findUnique({
    where: { email: email },
  });
  if (user) {
    throw new ApiError(httpStatus.CONFLICT, 'User Already exist');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const userdata = {
    name: name,
    email: email,
    password: hashedPassword,
    role: role,
    contactNo: contactNo,
    address: address,
    profileImg: profileImg,
  };

  const result = await prisma.users.create({
    data: userdata,
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
const login = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
  const user = await prisma.users.findUnique({
    where: { email },
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Invalid password');
  }
  //console.log('isPasswordValid:', isPasswordValid);
  // create AccessToken and refres token
  const { id: userId, role } = user;
  const token = jwtHelpers.createToken(
    { userId, role },
    process.env.secret as Secret,
    process.env.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    process.env.refresh_secret as Secret,
    process.env.refresh_expires_in as string
  );

  return {
    token,
    refreshToken,
  };
};

// refreshtoken
const refreshtoken = async (token: string): Promise<IRefreshTokenResponse> => {
  // verify token
  // console.log('ser RT:', token);
  let verifiedToken: JwtPayload | null = null;

  try {
    verifiedToken = jwt.verify(
      token,
      process.env.refresh_secret as Secret
    ) as JwtPayload;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid refresh token');
  }
  const { userId } = verifiedToken;
  const existUser = await prisma.users.findUnique({
    where: { id: userId },
  });
  // console.log(existUser?.id);
  if (!existUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  // genarate new token
  const newAccessToken = jwtHelpers.createToken(
    { id: existUser.id, role: existUser.role },
    process.env.refresh_secret as Secret,
    process.env.refresh_expires_in as string
  );
  return { accessToken: newAccessToken };
};
export const AuthService = {
  signup,
  login,
  refreshtoken,
};

/*
let verifiedToken = null;
  try {
    verifiedToken = jwt.verify(token, process.env.refresh_secret as Secret);
    // console.log('decoded:', verifiedToken);
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token');
  }

  // check user exist database
  const { userId, role } = verifiedToken;
  const existUser = await prisma.users.findUnique({ where: { id: userId } });
  console.log(existUser);
*/
