import { Books } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
//import { BookFilterAbleFileds } from './book.interface';
import pick from '../../../shared/pick';
import { BookFilterAbleFileds, IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);
  console.log('result:', result);
  // Fetch the associated "category" for the created book
  // const bookWithCategory = await prisma.books.findUnique({
  //   where: { id: result.id },
  //   include: { category: true },
  // });

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully !!',
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  try {
    // ?page=1&limit=3    ||
    const filters = pick(req.query, BookFilterAbleFileds);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await BookService.getBooks(filters, options);
    res.status(200).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book retrive successfully !!',
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
const getBooksByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const results = await BookService.getBooksByCategoryId(req.params.categoryId);

  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !!',
    data: results,
  });
});
const getBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBook(req.params.id);
  sendResponse<Books>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !!',
    data: result,
  });
});
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookService.updateBook(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book update successfully !!',
    data: result,
  });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);
  sendResponse<Books>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully !!',
    data: result,
  });
});
export const BookControlller = {
  createBook,
  getBooks,
  getBooksByCategoryId,
  getBook,
  updateBook,
  deleteBook,
};
