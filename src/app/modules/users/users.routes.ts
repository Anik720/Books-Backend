import express from 'express'
import { UserController } from './users.controller'

const router = express.Router()

router.post('/auth/signup', UserController.createUser)
router.get('/users/:id', UserController.getSingleUser)
router.patch('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

router.get('/users', UserController.getAllUsers)
export const UserRouter = router
