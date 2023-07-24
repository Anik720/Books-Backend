import { Model, Schema, model } from 'mongoose'

const wishlistSchema = new Schema(
  {
    email: { type: String, required: true },
    wishlist: { type: [Object], default: [] },
    currentBooksReading: { type: [Object], default: [] },
  },
  {
    timestamps: true,
  }
)

const wishList = model('wishList', wishlistSchema)

export default wishList
