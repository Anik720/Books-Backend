import { Model, Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'

const userSchema = new Schema<IUser>(
  {
    phoneNumber: { type: String, required: true },
    role: { type: String, required: true, enum: ['seller', 'buyer'] },

    password: { type: String, required: true },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
