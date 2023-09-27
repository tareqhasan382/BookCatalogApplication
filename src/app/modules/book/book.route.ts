import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookControlller } from './book.controller';

const router = express.Router();
router.post(
  '/books/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  BookControlller.createBook
);
router.get('/books', BookControlller.getBooks);
//router.get('/books/:categoryId/category', BookControlller.getBook); // books/:categoryId/category
router.get(
  '/books/:categoryId/category',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  BookControlller.getBooksByCategoryId
);
router.get('/books/:id', BookControlller.getBook);
router.patch(
  '/books/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookControlller.updateBook
);
router.delete(
  '/books/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookControlller.deleteBook
);

export const BookRoutes = router;
