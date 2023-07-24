import { Model, Schema, Types } from 'mongoose'

export type UserName = {
  firstName: string
  lastName: string
  middleName: string
}
export type IUser = {
  phoneNumber: string
  role: string
  name: UserName
  password: string
  address: string
  budget: number
  income: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
export type IUserFilters = {
  searchTerm?: string
  phoneNumber?: string
  address?: string
  budget?: number
  income?: number
}
