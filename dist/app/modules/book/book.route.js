"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/books', book_controller_1.BookControlller.createBook);
router.get('/books', book_controller_1.BookControlller.getBooks);
//router.get('/books/:categoryId/category', BookControlller.getBook); // books/:categoryId/category
router.get('/books/:categoryId/category', book_controller_1.BookControlller.getBooksByCategoryId);
router.get('/books/:id', book_controller_1.BookControlller.getBook);
router.patch('/books/:id', book_controller_1.BookControlller.updateBook);
router.delete('/books/:id', book_controller_1.BookControlller.deleteBook);
exports.BookRoutes = router;
