import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
// import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
import routes from './app/routes';
import cors = require('cors');
const app: Application = express();
app.use(cookieParser());
// app.use(cors({
//     credentials: true,
//     origin: ['http://localhost:3000'],
//   }));
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:300',
      'http://localhost:3500',
      'http://localhost:300/',
      'http://localhost:3000',
    ],
  })
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

//global error handler
//app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
