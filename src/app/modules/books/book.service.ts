import mongoose, { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiErrors'
import httpStatus from 'http-status'
import { IpaginationOptions } from '../../../interfaces/pagination'
import { IGenericResponse } from '../../../interfaces/common'
import { paginationHelpers } from '../../../helper/pagination'
import { IBook, IBookFilters } from './book.interface'
import Book from './book.model'
import { bookSearchableFields } from './book.constant'
import wishList from './wishList.model'

const createBook = async (book: IBook): Promise<IBook | null> => {
  console.log(12, book)
  const newBook = await Book.create(book)
  return newBook
}
const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IpaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await Book.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id })
  return result
}

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id: id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete({ _id: id })

  return result
}

const addToWishList = async (data: any) => {
  const findWish = await wishList.findOne({ email: data.email })
  let result
  if (!findWish) {
    result = await wishList.create(data)
  } else {
    result = await wishList.findOneAndUpdate(data)
  }

  return result
}
const getWishList = async (data: any) => {
  const result = await wishList.findOne({ email: data })

  return result
}

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  addToWishList,
  getWishList,
}
