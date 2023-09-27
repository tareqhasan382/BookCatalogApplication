import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Retrieve the token from the cookie
      // const cookies = req.headers.cookie;
      // const tok = cookies?.split('=')[1];
      // console.log('cookies tok:', tok);
      const token = req.headers.authorization;
      // console.log('access auth:', token);
      if (!token) {
        //throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ message: 'You are not authorized' });
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(
        token,
        process.env.secret as Secret
      );
      // console.log('verifiedUser:', verifiedUser);

      // req.user = verifiedUser; // role  , userid

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        return res.status(httpStatus.FORBIDDEN).json({ message: 'Forbidden' });
        //throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
      req.user = verifiedUser; // role  , userid
      // console.log('verifiedUser:', verifiedUser);
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
