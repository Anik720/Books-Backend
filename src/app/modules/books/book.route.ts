import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()

router.post('/', BookController.createBook)
router.put('/add-to-wishlist', BookController.addToWishList)
router.get('/get-wishlist', BookController.getWishList)
router.get('/:id', BookController.getSingleBook)
router.patch('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)

router.get('/', BookController.getAllBooks)
export const BookRouter = router
