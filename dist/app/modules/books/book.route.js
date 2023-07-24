"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/', book_controller_1.BookController.createBook);
router.put('/add-to-wishlist', book_controller_1.BookController.addToWishList);
router.get('/get-wishlist', book_controller_1.BookController.getWishList);
router.get('/:id', book_controller_1.BookController.getSingleBook);
router.patch('/:id', book_controller_1.BookController.updateBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
router.get('/', book_controller_1.BookController.getAllBooks);
exports.BookRouter = router;
