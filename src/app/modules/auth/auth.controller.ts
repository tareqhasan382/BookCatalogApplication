import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IRefreshTokenResponse } from './auth.interface';
import { AuthService } from './auth.service';
const signup = catchAsync(async (req: Request, res: Response) => {
  try {
    const result = await AuthService.signup(req.body);

    res.status(200).json({
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'signup successfully !!',
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.CONFLICT,
      success: false,
      message: 'something went wrong | User Already exist',
      data: error,
    });
  }
});
const login = catchAsync(async (req: Request, res: Response) => {
  try {
    const { ...loginData } = req.body;

    const result = await AuthService.login(loginData);
    const { refreshToken, ...others } = result;

    res.cookie('token', refreshToken, {
      secure: process.env.NODE_ENV == 'production',
      httpOnly: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    }); // 7 * 24 * 60 * 60 * 1000
    res.status(200).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users login successfully !!',
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'something went wrong !!',
      data: error,
    });
  }
});
const refreshtoken = catchAsync(async (req: Request, res: Response) => {
  try {
    const { token } = req.cookies;
    // console.log('req.cookies RT:', token);
    const result = await AuthService.refreshtoken(token);
    //  console.log('result:', result);
    // set refres token into cookie
    const cookieOptions = {
      secure: process.env.NODE_ENV == 'production', // config.env === 'production'
      httpOnly: true,
    };
    res.cookie('token', token, cookieOptions);
    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
      message: 'refreshtoken token created successfully !!',
    });
    // res.status(200).json({
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: 'refreshtoken token created successfully !!',
    //   data: result,
    // });
  } catch (error) {
    res.status(400).json({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'something went wrong !!',
      data: error,
    });
  }
});
const logOut = catchAsync(async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies.token) return res.status(httpStatus.NOT_FOUND);
  res.clearCookie('token', { httpOnly: true, sameSite: 'none', secure: true });
  res.json({ message: 'Cookiemcleared' });
});
export const AuthControlller = {
  signup,
  login,
  refreshtoken,
  logOut,
};
