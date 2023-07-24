import { Model, Schema, Types } from 'mongoose'

export type IBook = {
  title: string
  author: string
  genre: string
  publication_date: Date
  reviews: Array<string>
  images: string
  wishlist: Array<object>
  currentBooksReading: Array<object>
  readingStatus: Array<object>

  //   seller: Types.ObjectId | IUser
}

export type BookModel = Model<IBook, Record<string, unknown>>
export type IBookFilters = {
  searchTerm?: string
  title?: string
  author?: string
  genre?: string
  publication_date?: Date
  reviews?: Array<string>
}
