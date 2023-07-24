import { Model, Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: Date, require: true },
    reviews: { type: [String] },
    images: { type: String, required: true },
    readingStatus: { type: [Object], default: [] },
    // seller: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
)

const Book = model<IBook, BookModel>('Book', bookSchema)

export default Book
