import express from 'express'

import { BookRouter } from '../modules/books/book.route'

const router = express.Router()
const moduleRoutes = [
  {
    path: '/books',
    route: BookRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
