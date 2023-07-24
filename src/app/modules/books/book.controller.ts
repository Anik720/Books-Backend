import { Request, Response, NextFunction, RequestHandler } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import pick from '../../../shared/pick'
import { IBook } from './book.interface'
import { BookService } from './book.service'
import { bookFilterableFields } from './book.constant'

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...bookdata } = req.body
    const result = await BookService.createBook(bookdata)

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book created successfully',
      data: result,
    })
  }
)

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await BookService.getAllBooks(filters, paginationOptions)

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await BookService.getSingleBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await BookService.updateBook(id, updatedData)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully !',
    data: result,
  })
})
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await BookService.deleteBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})
const addToWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...bookdata } = req.body
  const result = await BookService.addToWishList(bookdata)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add to wishlisj=t successfully',
    data: result,
  })
})
const getWishList = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email
  console.log(91, email)
  const result = await BookService.getWishList(email)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist retrieved successfully',
    data: result,
  })
})
export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  addToWishList,
  getWishList,
}
