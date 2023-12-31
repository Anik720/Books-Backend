import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandlers'

import routes from './app/routes'
import httpStatus from 'http-status'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)
app.get('/', (req, res, next) => {
  throw new Error('Testing error logger')
 
  // Promise.reject(new Error('Unhandle rejection'))
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not FOUND',
      },
    ],
  })
  next()
})

export default app
